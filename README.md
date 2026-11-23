# Glyfa Mobile

Mobile app for Glyfa, built with [Expo](https://expo.dev) and React Native using [Expo Router](https://docs.expo.dev/router/introduction) for file-based navigation.

## Requirements

- Node.js (a version supported by the installed Expo SDK)
- npm (the project uses `package-lock.json`)
- Expo Go, a development build, or an iOS/Android simulator

## Getting started

```bash
npm install
npx expo start
```

From the dev server output, open the app in Expo Go, a development build, an Android emulator, an iOS simulator, or the browser.

## Scripts

| Command | What it does |
| --- | --- |
| `npx expo start` | Start the dev server |
| `npx expo start -c` | Start the dev server with a cleared cache |
| `npx expo lint` | Run ESLint |
| `npx tsc --noEmit` | Typecheck |
| `npx expo-doctor` | Check dependency and config issues |
| `npx expo install --fix` | Align package versions with the current Expo SDK |

Add dependencies with `npx expo install <package>` so the versions match the SDK.

## Project structure

```
src/
  app/                  Routes (every file here is a screen; _layout.tsx files define navigators)
    _layout.tsx         Root layout
    index.tsx           Home (currently the starter screen)
    explore.tsx         Explore tab
    verify/             Verification flow (see below)
  components/           Shared components
    verification/       Layout used by the verification screens
  constants/            Theme colors, spacing, fonts
  hooks/                Shared hooks (e.g. useTheme)
assets/                 Images and icons
```

Keep non-route code (components, hooks, utilities) outside `src/app/`. Files in `src/app/` become screens, so a helper placed there becomes a route.

## Verification flow

The `src/app/verify/` stack covers the phone number recovery and proof review process. Each screen is a route built on `VerificationScreen`:

| Route | Screen |
| --- | --- |
| `/verify/cant-get-code` | Can't get the code |
| `/verify/lost-number` | Lost your number |
| `/verify/new-number` | Your new number |
| `/verify/add-proof` | Add your proof |
| `/verify/under-review` | Under review |
| `/verify/needs-one-more` | Needs one more thing |
| `/verify/approved` | Approved, confirm number |
| `/verify/back-in` | You are back in |
| `/verify/decision` | How this was decided |
| `/verify/not-approved` | Not approved |

The copy is placeholder text. The flow isn't linked from the Home screen yet, so open a route directly while developing (for example `exp://<host>:<port>/--/verify/cant-get-code` in Expo Go). The proof upload is a placeholder and doesn't send anything.

## Building and shipping

Builds and updates use EAS:

```bash
npx eas-cli@latest build --profile development
npx eas-cli@latest update
```

Native configuration lives in `app.json` and config plugins. Don't edit `ios/` or `android/` by hand; they're generated.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router introduction](https://docs.expo.dev/router/introduction/)
- [EAS Build](https://docs.expo.dev/eas/)
