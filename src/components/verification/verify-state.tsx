import * as ImagePicker from 'expo-image-picker';
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { Alert } from 'react-native';

// Local, in-memory state for the recovery flow. There is no backend yet, so
// nothing here is saved or sent anywhere; restarting the app resets it.

export type ProofKey = 'id' | 'selfie' | 'workplace' | 'customer';

type VerifyState = {
  newNumber: string;
  setNewNumber: (value: string) => void;
  proofs: Partial<Record<ProofKey, string>>;
  setProof: (key: ProofKey, uri: string) => void;
  proofCount: number;
  reset: () => void;
};

const VerifyContext = createContext<VerifyState | null>(null);

export function VerifyProvider({ children }: { children: ReactNode }) {
  const [newNumber, setNewNumber] = useState('');
  const [proofs, setProofs] = useState<Partial<Record<ProofKey, string>>>({});

  const setProof = useCallback((key: ProofKey, uri: string) => {
    setProofs((current) => ({ ...current, [key]: uri }));
  }, []);

  const reset = useCallback(() => {
    setNewNumber('');
    setProofs({});
  }, []);

  const value = useMemo<VerifyState>(
    () => ({
      newNumber,
      setNewNumber,
      proofs,
      setProof,
      proofCount: Object.keys(proofs).length,
      reset,
    }),
    [newNumber, proofs, setProof, reset],
  );

  return <VerifyContext.Provider value={value}>{children}</VerifyContext.Provider>;
}

export function useVerify() {
  const context = useContext(VerifyContext);
  if (!context) {
    throw new Error('useVerify must be used inside VerifyProvider');
  }
  return context;
}

/** Explains what the live app would do. Used for actions that need a backend. */
export function showDemo(message: string) {
  Alert.alert('Demo', message);
}

/** Opens the photo library and stores the chosen image for a proof slot. */
export function usePickProof() {
  const { setProof } = useVerify();

  return useCallback(
    async (key: ProofKey) => {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        showDemo('Allow photo access in Settings to add proof.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 0.7,
      });
      if (!result.canceled && result.assets[0]) {
        setProof(key, result.assets[0].uri);
      }
    },
    [setProof],
  );
}

/** Only digits, at most 10 for a phone number. */
export function isValidPhone(value: string) {
  return value.replace(/\D/g, '').length >= 10;
}
