import { type Href, router } from 'expo-router';
import { type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type VerificationAction = {
  label: string;
  /** Route to push. Use `onPress` for anything else. */
  href?: Href;
  onPress?: () => void;
};

type VerificationScreenProps = {
  title: string;
  body: string;
  /** Small status label shown above the title, e.g. "Step 2 of 4". */
  eyebrow?: string;
  primary?: VerificationAction;
  secondary?: VerificationAction;
  children?: ReactNode;
};

export function VerificationScreen({
  title,
  body,
  eyebrow,
  primary,
  secondary,
  children,
}: VerificationScreenProps) {
  const theme = useTheme();

  const runAction = (action: VerificationAction) => {
    if (action.href) {
      router.push(action.href);
    } else {
      action.onPress?.();
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled">
          {eyebrow ? (
            <ThemedText type="smallBold" themeColor="textSecondary" style={styles.eyebrow}>
              {eyebrow}
            </ThemedText>
          ) : null}

          <ThemedText type="subtitle" accessibilityRole="header">
            {title}
          </ThemedText>

          <ThemedText type="default" themeColor="textSecondary">
            {body}
          </ThemedText>

          {children ? <View style={styles.children}>{children}</View> : null}
        </ScrollView>

        {primary || secondary ? (
          <View style={styles.actions}>
            {primary ? (
              <Pressable
                accessibilityRole="button"
                onPress={() => runAction(primary)}
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: theme.text, opacity: pressed ? 0.8 : 1 },
                ]}>
                <ThemedText type="default" style={[styles.buttonLabel, { color: theme.background }]}>
                  {primary.label}
                </ThemedText>
              </Pressable>
            ) : null}

            {secondary ? (
              <Pressable
                accessibilityRole="button"
                onPress={() => runAction(secondary)}
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: theme.backgroundElement, opacity: pressed ? 0.8 : 1 },
                ]}>
                <ThemedText type="default" style={styles.buttonLabel}>
                  {secondary.label}
                </ThemedText>
              </Pressable>
            ) : null}
          </View>
        ) : null}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
  },
  content: {
    flexGrow: 1,
    gap: Spacing.three,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.three,
  },
  eyebrow: {
    textTransform: 'uppercase',
  },
  children: {
    gap: Spacing.three,
    marginTop: Spacing.two,
  },
  actions: {
    gap: Spacing.two,
    paddingBottom: Spacing.three,
  },
  button: {
    minHeight: 52,
    borderRadius: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
  },
  buttonLabel: {
    fontWeight: 600,
  },
});
