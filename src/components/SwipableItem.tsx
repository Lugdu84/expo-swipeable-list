import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import {
	GestureHandlerRootView,
	Swipeable,
} from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';

type ListItemProps = {
	item: {
		id: string;
		name: string;
	};
	onDelete: (id: string) => void;
};

type RightActionsProps = {
	onDelete: () => void;
};

const RightActions = ({ onDelete }: RightActionsProps) => {
	const handleDelete = () => {
		console.log('delete');
		onDelete();
	};

	const handleArchive = () => {
		console.log('archive');
	};
	return (
		<View
			style={[
				{
					flex: 1 / 2,
					flexDirection: 'row',
				},
			]}>
			<Pressable
				style={[styles.button, { backgroundColor: 'blue' }]}
				onPress={handleArchive}>
				<Fontisto
					name="preview"
					size={18}
					color="white"
				/>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={handleDelete}>
				<Fontisto
					name="trash"
					size={18}
					color="white"
				/>
			</Pressable>
		</View>
	);
};

const LeftActions = () => {
	const handleEdit = () => {
		console.log('edit');
	};
	return (
		<View
			style={[
				{
					flex: 1 / 2,
					flexDirection: 'row',
				},
			]}>
			<Pressable
				style={[styles.button, { backgroundColor: 'green' }]}
				onPress={handleEdit}>
				<Fontisto
					name="adobe"
					size={18}
					color="white"
				/>
			</Pressable>
		</View>
	);
};

export default function SwipableItem({ item, onDelete }: ListItemProps) {
	return (
		<Swipeable
			// onSwipeableOpen={() => onDelete(item.id)}
			onSwipeableWillOpen={() => console.log('onSwipeableWillOpen')}
			onSwipeableWillClose={() => console.log('onSwipeableWillClose')}
			renderRightActions={() => (
				<RightActions
					onDelete={() => {
						onDelete(item.id);
					}}
				/>
			)}
			renderLeftActions={() => <LeftActions />}>
			<View style={styles.container}>
				<Text>{item.name}</Text>
			</View>
		</Swipeable>
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
