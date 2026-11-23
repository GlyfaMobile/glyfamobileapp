import { Stack } from 'expo-router';

export default function VerifyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="cant-get-code" />
      <Stack.Screen name="lost-number" />
      <Stack.Screen name="new-number" />
      <Stack.Screen name="add-proof" />
      <Stack.Screen name="under-review" />
      <Stack.Screen name="needs-one-more" />
      <Stack.Screen name="approved" />
      <Stack.Screen name="back-in" />
      <Stack.Screen name="decision" />
      <Stack.Screen name="not-approved" />
    </Stack>
  );
}
