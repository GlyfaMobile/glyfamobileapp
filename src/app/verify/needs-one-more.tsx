import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NeedsOneMoreScreen() {
  return (
    <VerificationScreen
      eyebrow="Action needed"
      title="Needs one more thing"
      body="We couldn't confirm your proof yet. Add one more document and we'll review it again."
      primary={{ label: 'Add more proof', href: '/verify/add-proof' }}
    />
  );
}
