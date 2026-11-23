import { router } from 'expo-router';

import { VerificationScreen } from '@/components/verification/verification-screen';

export default function BackInScreen() {
  return (
    <VerificationScreen
      eyebrow="Done"
      title="You are back in"
      body="Your account now uses the new number. You can sign in as usual."
      primary={{ label: 'Go to app', onPress: () => router.replace('/') }}
    />
  );
}
