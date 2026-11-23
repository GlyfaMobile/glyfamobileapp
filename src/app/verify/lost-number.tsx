import { router } from 'expo-router';

import { Actions, ListRow, Notice, PrimaryButton, TextButton } from '@/components/verification/parts';
import { goBack, VerificationScreen } from '@/components/verification/verification-screen';

export default function LostNumberScreen() {
  return (
    <VerificationScreen
      step={1}
      showBack
      title="Lost your number?"
      subtitle="You can get back in with proof that it is you. Our team checks it, so it takes a little time.">
      <Notice title="Your records are safe" body="Jobs, customers and confirmations stay exactly as they are while we check." />
      <ListRow title="Add your proof" subtitle="An ID, a selfie and one more thing." />
      <ListRow title="We check it" subtitle="Our team reviews what you send." />
      <ListRow title="You get back in" subtitle="We message your new number." />
      <Actions>
        <PrimaryButton label="Start recovery" onPress={() => router.push('/verify/new-number')} />
        <TextButton label="Go back" onPress={goBack} />
      </Actions>
    </VerificationScreen>
  );
}
