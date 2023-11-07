import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './components/Posts';
import ProfileDetail from './Components/ProfilDetails';
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
      <Button title="Rechercher" onPress={handleSearch} />
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
      <View style={styles.addButton}>
        <Ionicons name="add-circle" size={30} color="white" />
      </View>
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let color = focused ? 'blue' : 'black';

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
          inactiveTintColor: 'black',
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
            borderColor: 'transparent',
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          },
        }}>
        <Tab.Screen name="Recherche" component={SearchStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Accueil" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Ajout" component={MiddleScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
