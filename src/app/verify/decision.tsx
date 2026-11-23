import { router } from 'expo-router';

import { VerificationScreen } from '@/components/verification/verification-screen';

export default function DecisionScreen() {
  return (
    <VerificationScreen
      title="How this was decided"
      body="We compare your proof with the account's recent activity and the details you gave. A reviewer checks the result before it's final. You can see what was considered in each step."
      primary={{ label: 'Got it', onPress: () => router.back() }}
    />
  );
}
