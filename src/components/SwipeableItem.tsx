import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useRef } from 'react';
import { Fontisto } from '@expo/vector-icons';

type ListItemProps = {
	item: {
		id: string;
		name: string;
	};
	onDelete: (id: string) => void;
	lastSelectedItem: { id: string; ref: Swipeable | null };
	setLastSelectedItem: (item: { id: string; ref: Swipeable | null }) => void;
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
		<View style={styles.actions}>
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
		<View style={styles.actions}>
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

export default function SwipeableItem({
	item,
	lastSelectedItem,
	setLastSelectedItem,
	onDelete,
}: ListItemProps) {
	const swipRef = useRef<Swipeable | null>(null);

	const resetIfAlreadyOpen = () => {
		if (item.id !== lastSelectedItem.id) {
			lastSelectedItem.ref?.close();
		}
		setLastSelectedItem({
			id: item.id,
			ref: swipRef.current,
		});
	};

	return (
		<Swipeable
			ref={swipRef}
			// onSwipeableOpen={() => onDelete(item.id)}
			onSwipeableOpen={resetIfAlreadyOpen}
			onSwipeableClose={() => null}
			onActivated={() => null}
			onSwipeableWillOpen={() => null}
			onSwipeableWillClose={() => null}
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
	actions: {
		flex: 1 / 2,
		flexDirection: 'row',
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});
