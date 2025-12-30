
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

// Dummy Data
import { Colors } from '@/constants/theme';

// Dummy Data
export const MENU_ITEMS = [
    { id: '1', name: 'Ensalada de fideos', price: '$32', description: 'Con pechuga de pollo ala plancha.', icon: 'fork.knife' },
    { id: '2', name: 'arroz con pollo', price: '$24', description: 'con su crema huancaina.', icon: 'fork.knife' },
    { id: '3', name: 'lomo saltado', price: '$95', description: 'de pollo y de res.', icon: 'leaf.fill' },
    { id: '4', name: 'seco de pollo', price: '$25', description: 'de res o de pollo.', icon: 'drop.fill' },
    { id: '5', name: 'ensalada de veterraga', price: '$60', description: ' con  queso fresco y nueces.', icon: 'birthday.cake.fill' },
];

export default function MenuScreen() {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedText type="title" style={{ color: '#fff' }}>Nuestro Menú</ThemedText>
            </ThemedView>

            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => router.push(`/detail/${item.id}`)}
                    >
                        <ThemedView style={styles.iconContainer}>
                            {/* Using a generic icon for now, would be an image in real app */}
                            <IconSymbol name="list.bullet" size={24} color={Colors.light.primary} />
                        </ThemedView>
                        <View style={styles.textContainer}>
                            <ThemedText type="defaultSemiBold" style={{ color: Colors.light.text }}>{item.name}</ThemedText>
                            <ThemedText style={styles.description} numberOfLines={2}>{item.description}</ThemedText>
                            <ThemedText style={styles.price}>{item.price}</ThemedText>
                        </View>
                        <IconSymbol name="chevron.right" size={20} color={Colors.light.secondary} />
                    </TouchableOpacity>
                )}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: Colors.light.primary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.accent,
    },
    listContent: {
        padding: 16,
        backgroundColor: Colors.light.background,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        backgroundColor: Colors.light.card,
        borderRadius: 12,
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        borderLeftWidth: 4,
        borderLeftColor: Colors.light.secondary,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.light.accent,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 14,
        color: Colors.light.text,
        opacity: 0.8,
        marginTop: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.primary,
        marginTop: 4,
    },
});
