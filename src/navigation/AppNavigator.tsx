import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/src/screens/HomeScreen';
import FlightListScreen from '@/src/screens/FlightListScreen';
import FlightDetailsScreen from '../screens/FlightDetailsScreen';
import CustomHeaderTitle from '../components/HeaderTitleNavigate';
import CustomBackButton from '../components/BackButtom';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  FlightList: { 
    origin?: string; 
    destination?: string; 
    date?: Date; 
    flights?: any[], 
    number?: string 
  };
  FlightNumber: undefined;
  OriginDestination: undefined;
  FlightDetails: { flight: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FlightList"
        component={FlightListScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => <CustomHeaderTitle route={route} />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="FlightDetails"
        component={FlightDetailsScreen}
        options={({ navigation }) => ({
          title: '',
          headerTransparent: true, 
          headerLeft: () => <CustomBackButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;