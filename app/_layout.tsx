import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Home',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="sobre" 
          options={{
            title: 'Sobre',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="experiencia-academica" 
          options={{
            title: 'Experiência Acadêmica',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="experiencia-profissional" 
          options={{
            title: 'Experiência Profissional',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="projetos" 
          options={{
            title: 'Projetos',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="jogo" 
          options={{
            title: 'Jogo',
            headerShown: true
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
