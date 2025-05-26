import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

type ScreenRoute = '/sobre' | '/experiencia-academica' | '/experiencia-profissional' | '/projetos' | '/jogo';

interface Screen {
  name: string;
  route: ScreenRoute;
}

export default function Home() {
  const router = useRouter();

  const screens: Screen[] = [
    { name: 'Sobre', route: '/sobre' },
    { name: 'Experiência Acadêmica', route: '/experiencia-academica' },
    { name: 'Experiência Profissional', route: '/experiencia-profissional' },
    { name: 'Projetos', route: '/projetos' },
    { name: 'Jogo', route: '/jogo' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/eu.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
        {screens.map((screen) => (
          <TouchableOpacity
            key={screen.route}
            style={styles.button}
            onPress={() => router.push(screen.route)}
          >
            <Text style={styles.buttonText}>{screen.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 