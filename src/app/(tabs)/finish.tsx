import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '@components/ListItem';
import SwipableItem from '@/components/SwipableItem';
import { useState } from 'react';

const listLanguages = [
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

export default function FinishScreen() {
	const [languages, setLanguages] = useState(listLanguages);
	const handleDelete = (id: string) => {
		setLanguages((prev) => prev.filter((item) => item.id !== id));
	};
	return (
		<View
			style={{
				flex: 1,
			}}>
			<FlatList
				data={languages}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.container}
				renderItem={({ item }) => (
					<SwipableItem
						item={item}
						onDelete={handleDelete}
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
