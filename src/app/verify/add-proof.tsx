import { router } from 'expo-router';

import { Actions, ListRow, PrimaryButton } from '@/components/verification/parts';
import { showDemo, useVerify, usePickProof, type ProofKey } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

const PHOTO_ROWS: { key: ProofKey; title: string; subtitle: string }[] = [
  { key: 'id', title: 'Photo of your ID', subtitle: "NIN slip, licence or voter's card" },
  { key: 'selfie', title: 'Selfie with your ID', subtitle: 'Hold it next to your face' },
  { key: 'workplace', title: 'Your workplace', subtitle: 'A photo of your shop, chair or workshop' },
];

export default function AddProofScreen() {
  const { proofs, proofCount } = useVerify();
  const pickProof = usePickProof();

  return (
    <VerificationScreen
      step={3}
      showBack
      title="Add your proof"
      subtitle="Add at least two. The more you add, the faster we can decide.">
      {PHOTO_ROWS.map((row) => (
        <ListRow
          key={row.key}
          title={row.title}
          subtitle={row.subtitle}
          status={proofs[row.key] ? { label: 'Added', tone: 'success' } : { label: 'Add', tone: 'neutral' }}
          onPress={() => pickProof(row.key)}
        />
      ))}
      <ListRow
        title="A customer who can confirm"
        subtitle="We message someone you have worked for"
        status={{ label: 'Add', tone: 'neutral' }}
        onPress={() =>
          showDemo('In the live app, you enter a customer’s number and we message them to confirm.')
        }
      />
      <Actions>
        <PrimaryButton
          label="Send for review"
          disabled={proofCount < 2}
          onPress={() => router.push('/verify/under-review')}
        />
      </Actions>
    </VerificationScreen>
  );
}
