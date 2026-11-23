import { router } from 'expo-router';

import { Actions, ListRow, PrimaryButton } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function AddProofScreen() {
  return (
    <VerificationScreen
      step={3}
      showBack
      title="Add your proof"
      subtitle="Add at least two. The more you add, the faster we can decide.">
      <ListRow title="Photo of your ID" subtitle="NIN slip, licence or voter's card" status={{ label: 'Added', tone: 'success' }} />
      <ListRow title="Selfie with your ID" subtitle="Hold it next to your face" status={{ label: 'Added', tone: 'success' }} />
      <ListRow title="Your workplace" subtitle="A photo of your shop, chair or workshop" status={{ label: 'Add', tone: 'neutral' }} />
      <ListRow title="A customer who can confirm" subtitle="We message someone you have worked for" status={{ label: 'Add', tone: 'neutral' }} />
      <Actions>
        <PrimaryButton label="Send for review" onPress={() => router.push('/verify/under-review')} />
      </Actions>
    </VerificationScreen>
  );
}
