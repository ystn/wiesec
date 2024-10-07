import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';
import store from '@/store';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '@/tailwind.json';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(91, 33, 182)',
      background: 'rgb(10, 10, 10)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(10, 10, 10)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <ThemeProvider value={MyTheme}>
      <TailwindProvider utilities={utilities}>
        <SafeAreaProvider>
          <Provider store={store}>
            {/* <Slot /> */}
            <Stack screenOptions={{
              headerStyle: {backgroundColor: "rgb(10 10 10)"},
              headerTitleStyle: {color: 'white', fontSize: 26},
              headerBackVisible: false,
              }}>
              <Stack.Screen name="sign-in" options={{ title: 'Sign in' }}/>
              <Stack.Screen name="sign-up" options={{ title: 'Sign up' }}/>
              <Stack.Screen name="forgot-password/step1" options={{ title: 'Forgot Password' }}/>
              <Stack.Screen name="forgot-password/step2" options={{ title: 'Forgot Password' }}/>
              <Stack.Screen name="qrcode" options={{ title: 'Scan to Activate' }}/>
              <Stack.Screen name="(app)" options={{ headerShown: false }}/>
              <Stack.Screen name="+not-found" />
            </Stack>
          </Provider>
        </SafeAreaProvider>
      </TailwindProvider>
    </ThemeProvider>
  );
}
