import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Start',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={24}
							color={focused ? 'green' : 'gray'}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="finish"
				options={{
					title: 'Finish',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
							size={24}
							color={focused ? 'green' : 'gray'}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
