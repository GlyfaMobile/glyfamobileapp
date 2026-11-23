import { type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, type ViewStyle } from 'react-native';

import { VerifyColors, VerifyFonts } from '@/constants/verify-theme';

type ButtonProps = { label: string; onPress?: () => void; disabled?: boolean };

export function PrimaryButton({ label, onPress, disabled }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.primary, disabled && styles.disabled, pressed && styles.pressed]}>
      <Text style={styles.primaryLabel}>{label}</Text>
    </Pressable>
  );
}

export function SecondaryButton({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.secondary, pressed && styles.pressed]}>
      <Text style={styles.secondaryLabel}>{label}</Text>
    </Pressable>
  );
}

export function TextButton({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.textButton, pressed && styles.pressed]}>
      <Text style={styles.textButtonLabel}>{label}</Text>
    </Pressable>
  );
}

type RowStatus = { label: string; tone: 'success' | 'neutral' };

type ListRowProps = {
  title: string;
  subtitle?: string;
  status?: RowStatus;
  onPress?: () => void;
};

export function ListRow({ title, subtitle, status, onPress }: ListRowProps) {
  const body = (
    <>
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
      {status ? (
        <View style={[styles.pill, status.tone === 'success' ? styles.pillSuccess : styles.pillNeutral]}>
          <Text style={[styles.pillLabel, status.tone === 'success' ? styles.pillLabelSuccess : styles.pillLabelNeutral]}>
            {status.label}
          </Text>
        </View>
      ) : null}
    </>
  );

  if (!onPress) {
    return <View style={styles.row}>{body}</View>;
  }

  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      {body}
    </Pressable>
  );
}

type NoticeTone = 'yellow' | 'error' | 'success' | 'info';

const NOTICE_TONES: Record<NoticeTone, { container: ViewStyle; title: string }> = {
  yellow: {
    container: { backgroundColor: VerifyColors.yellowSubtle, borderColor: VerifyColors.borderStrong },
    title: VerifyColors.text,
  },
  error: {
    container: { backgroundColor: VerifyColors.errorSubtle, borderColor: VerifyColors.errorBorder },
    title: VerifyColors.error,
  },
  success: {
    container: { backgroundColor: VerifyColors.successSubtle, borderColor: VerifyColors.success },
    title: VerifyColors.success,
  },
  info: {
    container: { backgroundColor: VerifyColors.cyan, borderColor: VerifyColors.link },
    title: VerifyColors.text,
  },
};

export function Notice({ title, body, tone = 'yellow' }: { title: string; body?: string; tone?: NoticeTone }) {
  const t = NOTICE_TONES[tone];
  return (
    <View style={[styles.notice, t.container]}>
      <Text style={[styles.noticeTitle, { color: t.title }]}>{title}</Text>
      {body ? <Text style={styles.noticeBody}>{body}</Text> : null}
    </View>
  );
}

type FieldProps = {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  hint?: string;
  disabled?: boolean;
  placeholder?: string;
  keyboardType?: 'phone-pad' | 'number-pad';
  accessibilityLabel?: string;
};

export function Field({ label, value, onChangeText, hint, disabled, placeholder, keyboardType, accessibilityLabel }: FieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        placeholder={placeholder}
        placeholderTextColor={VerifyColors.textDisabled}
        keyboardType={keyboardType}
        accessibilityLabel={accessibilityLabel ?? label}
        style={[styles.input, disabled && styles.inputDisabled]}
      />
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}

export function Footnote({ text }: { text: string }) {
  return <Text style={styles.footnote}>{text}</Text>;
}

export function Actions({ children }: { children: ReactNode }) {
  return <View style={styles.actions}>{children}</View>;
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
  actions: {
    gap: 10,
    marginTop: 4,
  },
  primary: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VerifyColors.action,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 5,
    borderColor: '#000000',
  },
  primaryLabel: {
    fontFamily: VerifyFonts.heading,
    fontSize: 14,
    color: VerifyColors.text,
  },
  secondary: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VerifyColors.canvas,
    borderWidth: 1,
    borderColor: VerifyColors.text,
  },
  secondaryLabel: {
    fontFamily: VerifyFonts.heading,
    fontSize: 14,
    color: VerifyColors.text,
  },
  textButton: {
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLabel: {
    fontFamily: VerifyFonts.heading,
    fontSize: 14,
    color: VerifyColors.link,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderRadius: 14,
    borderWidth: 0.9,
    borderColor: VerifyColors.border,
    backgroundColor: VerifyColors.canvas,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontFamily: VerifyFonts.medium,
    fontSize: 14,
    lineHeight: 22,
    color: VerifyColors.text,
  },
  rowSubtitle: {
    fontFamily: VerifyFonts.regular,
    fontSize: 12,
    lineHeight: 20,
    color: VerifyColors.textSecondary,
  },
  pill: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 90,
  },
  pillSuccess: {
    backgroundColor: VerifyColors.successSubtle,
  },
  pillNeutral: {
    backgroundColor: VerifyColors.surfaceSunken,
  },
  pillLabel: {
    fontFamily: VerifyFonts.semibold,
    fontSize: 12,
    lineHeight: 16,
  },
  pillLabelSuccess: {
    color: VerifyColors.success,
  },
  pillLabelNeutral: {
    color: VerifyColors.textSecondary,
  },
  notice: {
    borderWidth: 0.9,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 2,
  },
  noticeTitle: {
    fontFamily: VerifyFonts.medium,
    fontSize: 14,
    lineHeight: 22,
  },
  noticeBody: {
    fontFamily: VerifyFonts.regular,
    fontSize: 14,
    lineHeight: 22,
    color: VerifyColors.text,
  },
  field: {
    gap: 6,
  },
  fieldLabel: {
    fontFamily: VerifyFonts.semibold,
    fontSize: 14,
    lineHeight: 20,
    color: VerifyColors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: VerifyColors.borderStrong,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontFamily: VerifyFonts.regular,
    fontSize: 16,
    lineHeight: 24,
    color: VerifyColors.text,
    backgroundColor: VerifyColors.canvas,
  },
  inputDisabled: {
    backgroundColor: VerifyColors.surfaceSunken,
    borderColor: VerifyColors.border,
    color: VerifyColors.textDisabled,
  },
  hint: {
    fontFamily: VerifyFonts.regular,
    fontSize: 12,
    lineHeight: 18,
    color: VerifyColors.textSecondary,
  },
  footnote: {
    fontFamily: VerifyFonts.regular,
    fontSize: 10,
    color: VerifyColors.textSecondary,
    textAlign: 'center',
    width: '100%',
  },
});
