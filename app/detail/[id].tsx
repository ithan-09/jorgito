import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

// Reusing data for simplicity. In a real app, this would come from a store or API.
const MENU_ITEMS = [
    { id: '1', name: 'ensala de fideos', price: '$120', description: 'con pechuga de pollo ala plancha.', icon: 'fork.knife' },
    { id: '2', name: 'arros con pollo', price: '$85', description: 'con su crema huancaina.', icon: 'fork.knife' },
    { id: '3', name: 'lomo saltado', price: '$95', description: 'con lechuga romana, crutones, queso parmesano y aderezo especial de la casa.', icon: 'leaf.fill' },
    { id: '4', name: 'seco de pollo', price: '$25', description: 'con coca-cola, sprite, fanta. Bien frío.', icon: 'drop.fill' },
    { id: '5', name: 'ensaladas de verduras', price: '$60', description: 'con queso fresco y nueces.', icon: 'birthday.cake.fill' },
];

export default function DetailScreen() {
    const { id } = useLocalSearchParams();
    const item = MENU_ITEMS.find(i => i.id === id);

    if (!item) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText>Item not found.</ThemedText>
            </ThemedView>
        );
    }

    return (
        <>
            <Stack.Screen options={{ title: item.name, headerBackTitle: 'Menú' }} />
            <ThemedView style={styles.container}>
                <View style={styles.iconHeader}>
                    <IconSymbol name="star.fill" size={80} color="#FF6B00" />
                </View>

                <ThemedView style={styles.content}>
                    <ThemedText type="title" style={styles.title}>{item.name}</ThemedText>
                    <ThemedText type="subtitle" style={styles.price}>{item.price}</ThemedText>

                    <View style={styles.separator} />

                    <ThemedText style={styles.descriptionLabel}>Descripción:</ThemedText>
                    <ThemedText style={styles.description}>{item.description}</ThemedText>

                    <View style={styles.button}>
                        <ThemedText style={styles.buttonText}>Agregar al Pedido</ThemedText>
                    </View>
                </ThemedView>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconHeader: {
        height: 200,
        backgroundColor: '#d8892dff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -24,
        backgroundColor: '#dc1818ff', // Should match theme background
    },
    title: {
        marginBottom: 8,
    },
    price: {
        color: '#27221fff',
        marginBottom: 24,
    },
    separator: {
        height: 1,
        backgroundColor: '#0a0a0aff',
        marginBottom: 24,
    },
    descriptionLabel: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        lineHeight: 24,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#FF6B00',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
