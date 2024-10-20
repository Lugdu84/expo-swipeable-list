import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type ListItemProps = {
	item: {
		id: string;
		name: string;
	};
};

export default function ListItem({ item }: ListItemProps) {
	return (
		<View style={styles.container}>
			<Text>{item.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'lightgray',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});
