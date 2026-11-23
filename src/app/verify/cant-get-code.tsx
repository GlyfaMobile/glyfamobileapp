import { router } from 'expo-router';

import { ListRow } from '@/components/verification/parts';
import { showDemo } from '@/components/verification/verify-state';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function CantGetCodeScreen() {
  return (
    <VerificationScreen showBack title="Can't get the code?" subtitle="Pick what fits.">
      <ListRow
        title="Try WhatsApp again"
        subtitle="We send a new code on WhatsApp."
        onPress={() => showDemo('In the live app, a new code is sent on WhatsApp. Any 4-digit code works here.')}
      />
      <ListRow
        title="Text me the code"
        subtitle="Get it by text message instead."
        onPress={() => showDemo('In the live app, a new code is sent by text message. Any 4-digit code works here.')}
      />
      <ListRow
        title="I lost this number"
        subtitle="Get back in with proof that it is you."
        status={{ label: 'Recovery', tone: 'neutral' }}
        onPress={() => router.push('/verify/lost-number')}
      />
    </VerificationScreen>
  );
}
