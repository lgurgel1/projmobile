import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

interface Attempt {
  guess: string;
  result: string;
}

export default function Jogo() {
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    generateSecret();
  }, []);

  const generateSecret = () => {
    const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10).toString());
    setSecret(numbers.join(''));
  };

  const checkGuess = (guess: string) => {
    let correct = 0;
    let wrongPosition = 0;
    const secretArray = secret.split('');
    const guessArray = guess.split('');

    // Check for correct positions
    for (let i = 0; i < 4; i++) {
      if (guessArray[i] === secretArray[i]) {
        correct++;
        secretArray[i] = 'X';
        guessArray[i] = 'X';
      }
    }

    // Check for wrong positions
    for (let i = 0; i < 4; i++) {
      if (guessArray[i] !== 'X') {
        const index = secretArray.indexOf(guessArray[i]);
        if (index !== -1) {
          wrongPosition++;
          secretArray[index] = 'X';
        }
      }
    }

    return `${correct} corretos, ${wrongPosition} posição errada`;
  };

  const handleGuess = () => {
    if (guess.length !== 4 || !/^\d+$/.test(guess)) {
      Alert.alert('Erro', 'Digite 4 números válidos');
      return;
    }

    const result = checkGuess(guess);
    const newAttempts = [...attempts, { guess, result }];
    setAttempts(newAttempts);
    setGuess('');

    if (result === '4 corretos, 0 posição errada') {
      setGameOver(true);
      Alert.alert('Parabéns!', 'Você acertou a combinação!');
    }
  };

  const showSecret = () => {
    Alert.alert('Combinação Secreta', `A combinação é: ${secret}`);
  };

  const resetGame = () => {
    generateSecret();
    setAttempts([]);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={guess}
          onChangeText={setGuess}
          placeholder="Digite 4 números"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={4}
          editable={!gameOver}
        />
        <TouchableOpacity
          style={[styles.button, gameOver && styles.buttonDisabled]}
          onPress={handleGuess}
          disabled={gameOver}
        >
          <Text style={styles.buttonText}>Tentar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.secretButton} onPress={showSecret}>
        <Text style={styles.secretButtonText}>Ver Combinação</Text>
      </TouchableOpacity>

      {gameOver && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetButtonText}>Novo Jogo</Text>
        </TouchableOpacity>
      )}

      <ScrollView style={styles.attemptsContainer}>
        {attempts.slice().reverse().map((attempt, index) => (
          <View key={index} style={styles.attemptItem}>
            <Text style={styles.attemptText}>
              Tentativa: {attempt.guess} - {attempt.result}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secretButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  secretButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  attemptsContainer: {
    flex: 1,
  },
  attemptItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  attemptText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
}); 