import { router } from 'expo-router';

import { Actions, ListRow, PrimaryButton, TextButton } from '@/components/verification/parts';
import { useVerify } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function BackInScreen() {
  const { newNumber, reset } = useVerify();

  return (
    <VerificationScreen title="You are back in" subtitle={`Your number is now ${newNumber || '0803 000 0000'}.`}>
      <ListRow title="Other devices signed out" subtitle="2 devices were signed out for your safety" status={{ label: 'Done', tone: 'success' }} />
      <ListRow title="Old number removed" subtitle="It can no longer be used to sign in" status={{ label: 'Done', tone: 'success' }} />
      <ListRow title="Your records" subtitle="Jobs and confirmations are unchanged" status={{ label: 'Safe', tone: 'success' }} />
      <Actions>
        <PrimaryButton
          label="Open my business"
          onPress={() => {
            reset();
            router.replace('/');
          }}
        />
        <TextButton label="See how this was decided" onPress={() => router.push('/verify/decision')} />
      </Actions>
    </VerificationScreen>
  );
}
