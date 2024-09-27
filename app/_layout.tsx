import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { FeatherIconsPack } from '@/components/feather-icons';
import { OctIconsPack } from '@/components/oct-icons';
import { default as theme } from '@/assets/theme.json';
import store from '@/store';
import RootNavigation from '@/navigation/root';
import { SessionProvider } from '@/utils/ctx';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <IconRegistry icons={EvaIconsPack} /> */}
      <IconRegistry icons={FeatherIconsPack} />
      <ApplicationProvider {...eva} theme={colorScheme === 'dark' ? {...eva.dark, ...theme} : {...eva.light, ...theme}}>
      {/* <ThemeProvider value={colorScheme === 'dark' ? eva.dark : eva.light}> */}
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Provider store={store}>
        {/* <SessionProvider> */}
          {/* <Stack>
            <RootNavigation />
          </Stack> */}
          <Slot />
          {/* <Stack> */}
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="(app)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack> */}
          {/* </SessionProvider> */}
        </Provider>
      </ThemeProvider>
      </ApplicationProvider>
    </>
  );
}
