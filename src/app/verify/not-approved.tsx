import { router } from 'expo-router';

import { Actions, Notice, PrimaryButton, SecondaryButton, TextButton } from '@/components/verification/parts';
import { showDemo } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NotApprovedScreen() {
  return (
    <VerificationScreen
      title="We could not confirm it is you"
      subtitle="Your account is unchanged. You can try again with new proof.">
      <Notice tone="error" title="Recovery was not approved" body="The selfie did not match the ID, and we could not reach a customer to confirm." />
      <Actions>
        <PrimaryButton label="Try again with new proof" onPress={() => router.push('/verify/add-proof')} />
        <SecondaryButton label="Contact glyfa support" onPress={() => showDemo('Support contact is not connected in this build.')} />
        <TextButton label="See how this was decided" onPress={() => router.push('/verify/decision')} />
      </Actions>
    </VerificationScreen>
  );
}
