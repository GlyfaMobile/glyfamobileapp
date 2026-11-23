import { router } from 'expo-router';

import { Actions, ListRow, Notice, PrimaryButton, TextButton } from '@/components/verification/parts';
import { showDemo, usePickProof } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NeedsOneMoreScreen() {
  const pickProof = usePickProof();

  return (
    <VerificationScreen
      step={5}
      title="We need one more thing"
      subtitle="Your review is still open. Nothing else changes.">
      <Notice title="Your ID photo is too dark" body="We could not read the details. Take it again in good light, with all four corners showing." />
      <ListRow title="Photo of your ID" subtitle="Retake in good light" status={{ label: 'Retake', tone: 'neutral' }} onPress={() => pickProof('id')} />
      <Actions>
        <PrimaryButton label="Send new photo" onPress={() => router.push('/verify/under-review')} />
        <TextButton label="Talk to us" onPress={() => showDemo('Support chat is not connected in this build.')} />
      </Actions>
    </VerificationScreen>
  );
}
