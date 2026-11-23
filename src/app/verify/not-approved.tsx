import { VerificationScreen } from '@/components/verification/verification-screen';

export default function NotApprovedScreen() {
  return (
    <VerificationScreen
      eyebrow="Not approved"
      title="Not approved"
      body="We couldn't verify this number with the proof provided. You can read how the decision was made or try again with different proof."
      primary={{ label: 'Try again', href: '/verify/lost-number' }}
      secondary={{ label: 'How this was decided', href: '/verify/decision' }}
    />
  );
}
