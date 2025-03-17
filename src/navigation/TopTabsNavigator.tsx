import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, TextStyle } from "react-native";
import styled from 'styled-components/native';
import OriginDestinationScreen from '@/src/screens/OriginDestinationScreen';
import FlightNumberScreen from '@/src/screens/FlightNumberScreen';

const TopTabs = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold" as TextStyle["fontWeight"],
    textTransform: "none",
  },
  indicator: {
    height: 0,
  },
});

interface TabButtonProps {
  focused: boolean;
}

const TopTabsNavigator = () => {
  return (
    <TopTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIndicatorStyle: styles.indicator,
        tabBarPressColor: "transparent",
        tabBarLabel: ({ focused }: { focused: boolean }) => (
          <TabButton focused={focused}>{route.name}</TabButton>
        ),
      })}>
      <TopTabs.Screen 
        name="Flight Number" 
        component={FlightNumberScreen}
        />
      <TopTabs.Screen name="Destination" component={OriginDestinationScreen} />
    </TopTabs.Navigator>
  );
};

const TabButton = styled(Text)<TabButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ focused }: TabButtonProps) => (focused ? '#fff' : '#000')};
  background-color: ${({ focused }: TabButtonProps) => (focused ? '#000' : 'transparent')};
  border-radius: 5px;
`;

export default TopTabsNavigator;
