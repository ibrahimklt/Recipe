import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categori from './src/pages/Categories'
import Detail from './src/pages/Detail'
import Meals from './src/pages/Meals'

const Stack =createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesPage' component={Categori}/>
        <Stack.Screen name='MealsPage' component={Meals}/>
        <Stack.Screen name='DetailPage' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
