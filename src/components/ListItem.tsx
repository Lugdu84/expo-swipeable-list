// L'item que vous allez devoir modifier pour intégrer le swipe

import { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

type ListItemProps = {
	onDelete: (id: string) => void;
	item: {
		id: string;
		name: string;
	};
	lastSelectedItem: { id: string; ref: Swipeable | null };
	setLastSelectedItem: (item: { id: string; ref: Swipeable | null }) => void;
};

export default function ListItem({
	item,
	lastSelectedItem,
	setLastSelectedItem,
	onDelete,
}: ListItemProps) {
	const swipeableRef = useRef<Swipeable>(null);

	const handleCloseIfAlreadyOpen = () => {
		if (lastSelectedItem.id !== item.id) {
			lastSelectedItem.ref?.close();
		}
		setLastSelectedItem({ id: item.id, ref: swipeableRef.current });
	};
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

// 1. Installer react-native-gesture-handler, si nécessaire
// 2. Ajouter le <GestureHandlerRootView>
// 3. Ajouter le Swipeable
// 4. Ajouter les actions, via le renderRightActions et renderLeftActions (on pourrait faire un composant externe)
// 5. Jouer avec les tailles, en mettant plusieurs boutons
// 6. Implémenter la suppression : au click sur le bouton ou au swipe
// 7. Gérer le swipe : fermer les autres éléments ouverts
// => donc ajouter la ref swipeableRef
// => ajouter la fonction handleCloseIfAlreadyOpen
// => utiliser la fonction dans le onSwipeableOpen
