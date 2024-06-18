import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarActiveBackgroundColor: "#F5F0EA",
        tabBarInactiveBackgroundColor: "#F5F0EA",
        tabBarStyle: {
          borderTopWidth: 0,
          paddingBottom: 5,
          marginBottom: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerTintColor: 'black',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={'#292929'} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Linktree',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'apps' : 'apps-outline'} color={'#292929'} />
          ),
        }}
      />
    </Tabs>
  );
}