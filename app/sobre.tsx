import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  const technologies = [
    'React Native',
    'Expo',
    'TypeScript',
    'Expo Router',
    'React Navigation',
    'React Native Reanimated',
    'React Native Gesture Handler',
    'React Native Safe Area Context',
    'React Native Screens',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Sobre Mim</Text>
        <Text style={styles.text}>
          Olá! Me chamo Lucas Gurgel, tenho 21 anos e sou um desenvolvedor apaixonado por tecnologia.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Tecnologias Utilizadas</Text>
        {technologies.map((tech, index) => (
          <Text key={index} style={styles.techItem}>• {tech}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007AFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  techItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#FFFFFF',
  },
}); 