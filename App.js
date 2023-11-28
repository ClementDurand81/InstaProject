import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './components/Posts';
import ProfileDetail from './Components/ProfilDetails';
import AddPostScreen from './Components/Ajout';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Posts />
    </ScrollView>
  );
}

function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = () => {
    console.log('Recherche effectuée avec le texte:', searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre recherche"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} color="blue" />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileDetail />
    </View>
  );
}

function MiddleScreen() {
  return (
    <View style={styles.middleContainer}>
      <AddPostScreen></AddPostScreen>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recherche" component={SearchScreen} options={{ title: 'Recherche' }} />
    </Stack.Navigator>
  )}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let color = focused ? 'blue' : 'gray';

            if (route.name === 'Recherche') {
              iconName = 'search';
            } else if (route.name === 'Accueil') {
              iconName = 'home';
            } else if (route.name === 'Ajout') {
              return (
                <View style={styles.addButton}>
                  <Ionicons name="add-circle" size={30} color={color} />
                </View>
              );
            } else if (route.name === 'Profil') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#f5f5f5', // Fond gris très clair
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
            borderColor: 'transparent',
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Recherche" component={SearchStack} options={{ headerShown: false }} />
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Ajout" component={MiddleScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 15,
    margin: 10,
    padding: 10,
    elevation: 5,
  },
  addButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    padding: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
  },
});
