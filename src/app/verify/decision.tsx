import { ListRow, Footnote } from '@/components/verification/parts';
import { VerificationScreen } from '@/components/verification/verification-screen';

export default function DecisionScreen() {
  return (
    <VerificationScreen showBack title="How this was decided" subtitle="Only you can see this record.">
      <ListRow title="Decision" subtitle="Approved · 21 Nov, 4:40 pm" status={{ label: 'Approved', tone: 'success' }} />
      <ListRow title="Proof reviewed" subtitle="ID photo, selfie, workplace photo" />
      <ListRow title="Reviewed by" subtitle="glyfa team member, ID ending 07" />
      <ListRow title="Why" subtitle="Selfie matched the ID. Workplace matched your booking link." />
      <ListRow title="Devices signed out" subtitle="2 devices, 4:41 pm" />
      <Footnote text="We keep this so you can always see what happened and why." />
    </VerificationScreen>
  );
}
