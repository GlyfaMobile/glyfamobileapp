import { Image } from 'expo-image';
import { router } from 'expo-router';
import { type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { VerifyColors, VerifyFonts } from '@/constants/verify-theme';

type VerificationScreenProps = {
  /** 1–5. Shows the progress bar with this segment highlighted. */
  step?: number;
  /** Show the "Back" link. Defaults to going back in the stack. */
  showBack?: boolean;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const PROGRESS_SEGMENTS = 5;

/** Goes back when there is history; the first screen has none, so it stays put. */
export function goBack() {
  if (router.canGoBack()) {
    router.back();
  }
}

export function VerificationScreen({ step, showBack, title, subtitle, children }: VerificationScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <Image
        source={require('@/assets/images/verify/hero-crystal.png')}
        style={styles.hero}
        contentFit="cover"
        accessibilityIgnoresInvertColors
      />

      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Image
          source={require('@/assets/images/verify/glyfa-logo.png')}
          style={styles.logo}
          contentFit="contain"
          accessibilityLabel="glyfa"
        />
        <Pressable accessibilityRole="button" accessibilityLabel="Language: English" style={styles.lang}>
          <Text style={styles.langText}>EN</Text>
          <Chevron />
        </Pressable>
      </View>

      <View style={styles.sheet}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 28 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {showBack || step ? (
            <View style={styles.topRow}>
              {showBack ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Back"
                  onPress={goBack}
                  style={styles.backLink}>
                  <ChevronLeft />
                  <Text style={styles.backText}>Back</Text>
                </Pressable>
              ) : null}
              {step ? <Progress step={step} /> : null}
            </View>
          ) : null}

          <View style={styles.heading}>
            <Text style={styles.title} accessibilityRole="header">
              {title}
            </Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>

          {children}
        </ScrollView>
      </View>
    </View>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <View style={styles.progress} accessibilityLabel={`Step ${step} of ${PROGRESS_SEGMENTS}`}>
      {Array.from({ length: PROGRESS_SEGMENTS }, (_, i) => {
        const index = i + 1;
        const filled = index <= step;
        return (
          <View
            key={index}
            style={[
              styles.segment,
              { width: index === step ? 30 : 15 },
              filled ? styles.segmentFilled : styles.segmentEmpty,
            ]}
          />
        );
      })}
    </View>
  );
}

function Chevron() {
  return <View style={styles.chevronDown} />;
}

function ChevronLeft() {
  return <View style={styles.chevronLeft} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: VerifyColors.canvas,
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  logo: {
    width: 103,
    height: 40,
  },
  lang: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  langText: {
    fontFamily: VerifyFonts.semibold,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
  },
  sheet: {
    position: 'absolute',
    top: 172,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: VerifyColors.sheetTint,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: VerifyColors.sheetBorder,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 38,
    paddingTop: 16,
    gap: 14,
  },
  topRow: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  backText: {
    fontFamily: VerifyFonts.heading,
    fontSize: 14,
    color: VerifyColors.text,
  },
  chevronLeft: {
    width: 7,
    height: 7,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: VerifyColors.text,
    transform: [{ rotate: '45deg' }],
    marginLeft: 4,
    marginRight: 4,
  },
  chevronDown: {
    width: 6,
    height: 6,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#000000',
    transform: [{ rotate: '45deg' }],
    marginBottom: 3,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.4,
  },
  segment: {
    height: 4,
    borderRadius: 2.7,
  },
  segmentFilled: {
    backgroundColor: VerifyColors.text,
  },
  segmentEmpty: {
    backgroundColor: VerifyColors.actionDisabled,
    borderWidth: 0.2,
    borderColor: VerifyColors.neutral400,
  },
  heading: {
    gap: 6,
  },
  title: {
    fontFamily: VerifyFonts.heading,
    fontSize: 24,
    lineHeight: 34,
    color: VerifyColors.text,
  },
  subtitle: {
    fontFamily: VerifyFonts.regular,
    fontSize: 14,
    lineHeight: 22,
    color: VerifyColors.textSecondary,
  },
});
