import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation, route}) {
  const isDrawerOpen = useIsDrawerOpen();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (init && !isDrawerOpen) alert('closed!');
  }, [isDrawerOpen]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{isDrawerOpen}</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{unmountOnBlur: true}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
