import { router } from 'expo-router';

import { ListRow } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function CantGetCodeScreen() {
  return (
    <VerificationScreen showBack title="Can't get the code?" subtitle="Pick what fits.">
      <ListRow title="Try WhatsApp again" subtitle="We send a new code on WhatsApp." />
      <ListRow title="Text me the code" subtitle="Get it by text message instead." />
      <ListRow
        title="I lost this number"
        subtitle="Get back in with proof that it is you."
        status={{ label: 'Recovery', tone: 'neutral' }}
        onPress={() => router.push('/verify/lost-number')}
      />
    </VerificationScreen>
  );
}
