import { router } from 'expo-router';

import { VerificationScreen } from '@/components/verification/verification-screen';

export default function UnderReviewScreen() {
  return (
    <VerificationScreen
      eyebrow="Pending"
      title="Under review"
      body="We're checking your proof. This usually takes about one business day. We'll show the result here when it's ready."
      primary={{ label: 'Back to home', onPress: () => router.replace('/') }}
    />
  );
}
