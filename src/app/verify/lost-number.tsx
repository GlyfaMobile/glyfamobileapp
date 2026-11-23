import { router } from 'expo-router';

import { VerificationScreen } from '@/components/verification/verification-screen';

export default function LostNumberScreen() {
  return (
    <VerificationScreen
      title="Lost your number"
      body="No problem. Before we change the number on your account, we need proof that the account is yours."
      primary={{ label: 'Continue', href: '/verify/new-number' }}
      secondary={{ label: 'Back', onPress: () => router.back() }}
    />
  );
}
