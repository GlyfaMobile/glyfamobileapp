import { router } from 'expo-router';
import { useState } from 'react';

import { Actions, Field, Notice, PrimaryButton, TextButton } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function ApprovedScreen() {
  const [code, setCode] = useState('');

  return (
    <VerificationScreen
      step={5}
      title="Enter the code"
      subtitle="We sent a 4-digit code to 0803 000 0000.">
      <Notice tone="success" title="Approved" body="We checked your proof. Confirm your new number to get back in." />
      <Field
        label="4-digit code"
        value={code}
        onChangeText={(text) => setCode(text.replace(/\D/g, '').slice(0, 4))}
        keyboardType="number-pad"
        accessibilityLabel="4-digit code"
      />
      <Actions>
        <PrimaryButton label="Confirm number" onPress={() => router.push('/verify/back-in')} />
        <TextButton label="Send again in 0:45" />
      </Actions>
    </VerificationScreen>
  );
}
