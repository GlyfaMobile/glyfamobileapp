// Design tokens from the Glyfa Figma file (verification flow, mobile frames).
// The flow is light-only, matching the design.

export const VerifyColors = {
  canvas: '#ffffff',
  text: '#070b19',
  textSecondary: '#4c5b73',
  textDisabled: '#617088',
  border: '#dce2eb',
  borderStrong: '#34415a',
  action: '#eeff00',
  actionDisabled: '#edf1f6',
  surfaceSunken: '#edf1f6',
  neutral400: '#a7a7a7',
  link: '#007782',
  success: '#067647',
  successSubtle: '#ecfdf3',
  error: '#d92d20',
  errorSubtle: '#fef3f2',
  errorBorder: '#fda29b',
  yellowSubtle: '#fcffe5',
  cyan: '#00f0ff',
  sheetTint: 'rgba(255,255,255,0.1)',
  sheetBorder: '#e1e1e1',
} as const;

// Loaded in src/app/_layout.tsx with expo-font.
export const VerifyFonts = {
  heading: 'Poppins_600SemiBold',
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
} as const;
