import { StyleSheet, View } from 'react-native';
import Posts from './components/Posts';

export default function App() {
  return (
    <View style={styles.container}>
        <Posts>
          
        </Posts>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
    width: '100%',
    height: 50,
    textAlign: 'center',
  },
});