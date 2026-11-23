import { router } from 'expo-router';

import { Actions, ListRow, Notice, SecondaryButton, TextButton } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function UnderReviewScreen() {
  return (
    <VerificationScreen
      step={4}
      title="We are checking it"
      subtitle="We will message 0803 000 0000 when we decide. Usually within 1 working day. Reference: REC-4821.">
      <Notice tone="info" title="Your old number is on hold" body="Nobody can sign in with it while we check." />
      <ListRow title="Proof sent" subtitle="Today, 4:12 pm" status={{ label: 'Done', tone: 'success' }} />
      <ListRow title="Being checked" subtitle="Our team is looking at it" status={{ label: 'Now', tone: 'neutral' }} />
      <ListRow title="Decision" subtitle="You get a message" status={{ label: 'Next', tone: 'neutral' }} />
      <Actions>
        <SecondaryButton label="Add more proof" onPress={() => router.push('/verify/add-proof')} />
        <TextButton label="Cancel recovery" onPress={() => router.replace('/verify/cant-get-code')} />
      </Actions>
    </VerificationScreen>
  );
}
