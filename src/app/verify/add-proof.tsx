import { router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { VerificationScreen } from '@/components/verification/verification-screen';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function AddProofScreen() {
  const theme = useTheme();

  return (
    <VerificationScreen
      title="Add your proof"
      body="A photo of an old bill, a carrier statement, or a screenshot of your account page works well."
      primary={{ label: 'Submit for review', href: '/verify/under-review' }}
      secondary={{ label: 'Back', onPress: () => router.back() }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Choose proof"
        style={({ pressed }) => [
          styles.dropZone,
          { borderColor: theme.textSecondary, opacity: pressed ? 0.7 : 1 },
        ]}>
        <ThemedText type="smallBold" themeColor="textSecondary">
          Choose a photo or file
        </ThemedText>
      </Pressable>
    </VerificationScreen>
  );
}

const styles = StyleSheet.create({
  dropZone: {
    minHeight: 140,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
