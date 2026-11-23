import { router } from 'expo-router';
import { useEffect, useState } from 'react';

import { Actions, Field, Notice, PrimaryButton, TextButton } from '@/components/verification/parts';
import { showDemo, useVerify } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

const RESEND_SECONDS = 45;

export default function ApprovedScreen() {
  const { newNumber } = useVerify();
  const [code, setCode] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const resend = () => {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
    showDemo('In the live app, a new code is sent to your number. Any 4-digit code works here.');
  };

  const resendLabel =
    secondsLeft > 0
      ? `Send again in 0:${String(secondsLeft).padStart(2, '0')}`
      : 'Send again';

  return (
    <VerificationScreen
      step={5}
      title="Enter the code"
      subtitle={`We sent a 4-digit code to ${newNumber || '0803 000 0000'}.`}>
      <Notice tone="success" title="Approved" body="We checked your proof. Confirm your new number to get back in." />
      <Field
        label="4-digit code"
        value={code}
        onChangeText={(text) => setCode(text.replace(/\D/g, '').slice(0, 4))}
        keyboardType="number-pad"
        accessibilityLabel="4-digit code"
      />
      <Actions>
        <PrimaryButton
          label="Confirm number"
          disabled={code.length !== 4}
          onPress={() => router.push('/verify/back-in')}
        />
        <TextButton label={resendLabel} onPress={resend} />
      </Actions>
    </VerificationScreen>
  );
}
