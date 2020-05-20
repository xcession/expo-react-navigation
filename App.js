import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title={"Go to notifications"}
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button
        title={"Open Drawer"}
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title={"Toggle Drawer"}
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Screen</Text>
      <Button
        title={"Go back home"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Home"}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
});
