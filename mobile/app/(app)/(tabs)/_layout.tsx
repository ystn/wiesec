import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureResponderEvent, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as Location from 'expo-location';

import { useTailwind } from 'tailwind-rn';
import { useSelector } from 'react-redux';
import { selectLocation, setErrorMessage, setLocation } from '@/store/slices/location';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tw = useTailwind();

  const {location, errorMessage} = useSelector(selectLocation);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#5b21b6',
        tabBarActiveBackgroundColor: '#0a0a0a',
        tabBarInactiveBackgroundColor: '#0a0a0a',
        // headerShown: false,
        tabBarButton: (props) => {
          const {onPress, ...otherProps} = props;
          const handlePress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            onPress?.(e);
          }
          return (<Pressable {...otherProps} onPress={handlePress} />)
        },
        headerTitleStyle: tw('text-white text-3xl'),
        headerStyle: tw('bg-neutral-950'),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          href: null
        }}
      />
      <Tabs.Screen
        name='sandbox'
        options={{
          title: 'Sandbox',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flask' : 'flask-outline'} color={color} />
          ),
          href: null
          // tabBarButton: DisabledTabBarButton
        }}
      />
      <Tabs.Screen
        name='robbery'
        options={{
          title: 'Robbery',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'map' : 'map-outline'} color={color} />
          ),
          // tabBarButton: DisabledTabBarButton
        }}
      />
      <Tabs.Screen
        name='wiki'
        options={{
          title: 'Wiki',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
          // tabBarButton: DisabledTabBarButton
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox' : 'chatbox-outline'} color={color} />
          ),
          // tabBarButton: DisabledTabBarButton
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
          // tabBarButton: DisabledTabBarButton
        }}
      />
    </Tabs>
  );
}
