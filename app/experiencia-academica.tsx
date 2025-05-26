import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Atualmente estou cursando o 5º período de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP).
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