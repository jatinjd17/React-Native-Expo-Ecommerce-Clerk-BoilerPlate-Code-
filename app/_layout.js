import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "../utils/tokenCache";

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey="MyCLERK_PUBLISHABLE_KEY"
      tokenCache={tokenCache}
    >
      <Slot />
    </ClerkProvider>
  );
}
