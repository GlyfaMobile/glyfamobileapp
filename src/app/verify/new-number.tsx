import { router } from 'expo-router';
import { useState } from 'react';

import { Actions, Field, PrimaryButton } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NewNumberScreen() {
  const [newNumber, setNewNumber] = useState('0803 000 0000');

  return (
    <VerificationScreen
      step={2}
      showBack
      title="Your new number"
      subtitle="Once we approve, we send a code here.">
      <Field
        label="Old number"
        value="0801 ••• ••78"
        disabled
        hint="The number you lost access to."
      />
      <Field
        label="New number"
        value={newNumber}
        onChangeText={setNewNumber}
        keyboardType="phone-pad"
        hint="This is a made-up number for the test."
      />
      <Actions>
        <PrimaryButton label="Continue" onPress={() => router.push('/verify/add-proof')} />
      </Actions>
    </VerificationScreen>
  );
}
