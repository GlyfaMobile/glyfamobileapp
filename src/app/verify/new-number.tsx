import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { VerificationScreen } from '@/components/verification/verification-screen';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function NewNumberScreen() {
  const theme = useTheme();
  const [number, setNumber] = useState('');

  return (
    <VerificationScreen
      title="Your new number"
      body="Enter the phone number you use now. We'll ask you to prove it's yours next."
      primary={{ label: 'Continue', href: '/verify/add-proof' }}
      secondary={{ label: 'Back', onPress: () => router.back() }}>
      <TextInput
        value={number}
        onChangeText={setNumber}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        autoComplete="tel"
        placeholder="+1 555 000 0000"
        placeholderTextColor={theme.textSecondary}
        accessibilityLabel="New phone number"
        style={[
          styles.input,
          { color: theme.text, backgroundColor: theme.backgroundElement },
        ]}
      />
    </VerificationScreen>
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 52,
    borderRadius: Spacing.three,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
  },
});
