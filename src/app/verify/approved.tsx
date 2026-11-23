import { VerificationScreen } from '@/components/verification/verification-screen';

export default function ApprovedScreen() {
  return (
    <VerificationScreen
      eyebrow="Approved"
      title="Approved, confirm number"
      body="Your proof was accepted. Confirm the new number to finish updating your account."
      primary={{ label: 'Confirm number', href: '/verify/back-in' }}
    />
  );
}
