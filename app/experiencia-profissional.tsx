import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Atualmente trabalho como desenvolvedor na Agência Partem.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  content: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 