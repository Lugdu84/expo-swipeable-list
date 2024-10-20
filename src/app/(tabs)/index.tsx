import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '@components/ListItem';
import { useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

const listLangages = [
	{
		id: '1',
		name: 'JavaScript',
	},
	{
		id: '2',
		name: 'TypeScript',
	},
	{
		id: '3',
		name: 'Python',
	},
	{
		id: '4',
		name: 'Java',
	},
	{
		id: '5',
		name: 'C#',
	},
	{
		id: '6',
		name: 'C++',
	},
	{
		id: '7',
		name: 'PHP',
	},
	{
		id: '8',
		name: 'Ruby',
	},
	{
		id: '9',
		name: 'Go',
	},
	{
		id: '10',
		name: 'Swift',
	},
];

export default function StartScreen() {
	const [langages, setLangages] = useState(listLangages);

	const [lastSelectedItem, setLastSelectedItem] = useState<{
		id: string;
		ref: Swipeable | null;
	}>({ id: '', ref: null });

	const handleDelete = (id: string) => {
		setLangages((prev) => prev.filter((item) => item.id !== id));
	};
	return (
		<View
			style={{
				flex: 1,
			}}>
			<FlatList
				data={langages}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.container}
				renderItem={({ item }) => (
					<ListItem
						item={item}
						onDelete={handleDelete}
						lastSelectedItem={lastSelectedItem}
						setLastSelectedItem={setLastSelectedItem}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 10,
	},
});
