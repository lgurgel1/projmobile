import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Projetos() {
  const projects = [
    {
      name: 'Projeto Web',
      description: 'Site moderno para o Star Hotel',
      url: 'https://github.com/lgurgel1/projeto_web'
    },
    {
      name: 'Data Analytics',
      description: 'Projeto de análise de dados',
      url: 'https://github.com/lgurgel1/Data-Analytics'
    },
    {
      name: 'Portfólio',
      description: 'Meu portfólio pessoal',
      url: 'https://github.com/lgurgel1/projportfolio'
    }
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <TouchableOpacity
            key={index}
            style={styles.projectCard}
            onPress={() => handlePress(project.url)}
          >
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <Text style={styles.projectLink}>Ver no GitHub →</Text>
          </TouchableOpacity>
        ))}
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
  projectsContainer: {
    gap: 15,
  },
  projectCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  projectLink: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
}); 