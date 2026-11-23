import { router } from 'expo-router';

import { Actions, Field, PrimaryButton } from '@/components/verification/parts';
import { isValidPhone, useVerify } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NewNumberScreen() {
  const { newNumber, setNewNumber } = useVerify();

  return (
    <VerificationScreen
      step={2}
      showBack
      title="Your new number"
      subtitle="Once we approve, we send a code here.">
      <Field label="Old number" value="0801 ••• ••78" disabled hint="The number you lost access to." />
      <Field
        label="New number"
        value={newNumber}
        onChangeText={setNewNumber}
        keyboardType="phone-pad"
        placeholder="0803 000 0000"
        hint="Include all 10 or 11 digits."
      />
      <Actions>
        <PrimaryButton
          label="Continue"
          disabled={!isValidPhone(newNumber)}
          onPress={() => router.push('/verify/add-proof')}
        />
      </Actions>
    </VerificationScreen>
  );
}
