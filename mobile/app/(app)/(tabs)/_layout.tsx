import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureResponderEvent, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#5b21b6',
        tabBarActiveBackgroundColor: '#0a0a0a',
        tabBarInactiveBackgroundColor: '#0a0a0a',
        headerShown: false,
        tabBarButton: (props) => {
          const {onPress, ...otherProps} = props;
          const handlePress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            onPress?.(e);
          }
          return (<Pressable {...otherProps} onPress={handlePress} />)
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='sandbox'
        options={{
          title: 'Sandbox',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flask' : 'flask-outline'} color={color} />
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
          // tabBarButton: DisabledTabBarButton
        }}
      />
    </Tabs>
  );
}
