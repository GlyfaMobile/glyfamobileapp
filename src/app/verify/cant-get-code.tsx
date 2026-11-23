import { router } from 'expo-router';

import { VerificationScreen } from '@/components/verification/verification-screen';

export default function CantGetCodeScreen() {
  return (
    <VerificationScreen
      title="Can't get the code"
      body="Check that the number is right and that messages can reach it. If you no longer have this number, we can help you change it."
      primary={{ label: 'I lost this number', href: '/verify/lost-number' }}
      secondary={{ label: 'Go back', onPress: () => router.back() }}
    />
  );
}
