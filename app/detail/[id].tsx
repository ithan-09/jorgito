import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


import { Colors } from '@/constants/theme';

// Reusing data for simplicity. In a real app, this would come from a store or API.
// Reusing data from menu.tsx to ensure consistency
const MENU_ITEMS = [
    { id: '1', name: 'Ensalada de fideos', price: '$32', description: 'Con pechuga de pollo ala plancha.', image: require('@/assets/images/menu/ensalada_de_fideos.png') },
    { id: '2', name: 'arroz con pollo', price: '$24', description: 'con su crema huancaina.', image: require('@/assets/images/menu/arroz_con_pollo.png') },
    { id: '3', name: 'lomo saltado', price: '$95', description: 'de pollo y de res.', image: require('@/assets/images/menu/lomo_saltado.png') },
    { id: '4', name: 'seco de pollo', price: '$25', description: 'de res o de pollo.', image: require('@/assets/images/menu/seco_de_pollo.png') },
    { id: '5', name: 'ensalada de veterraga', price: '$60', description: ' con  queso fresco y nueces.', image: require('@/assets/images/menu/ensalada_de_veterraga.png') },
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
                <View style={styles.imageHeader}>
                    <Image source={item.image} style={styles.image} />
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
    imageHeader: {
        height: 300, // Taller for better image visibility
        backgroundColor: Colors.light.background,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -24,
        backgroundColor: Colors.light.background,
        elevation: 10,
    },
    title: {
        marginBottom: 8,
        color: '#000',
    },
    price: {
        color: '#000',
        marginBottom: 24,
        fontWeight: 'bold',
        fontSize: 24,
    },
    separator: {
        height: 1,
        backgroundColor: Colors.light.accent,
        marginBottom: 24,
        opacity: 0.5,
    },
    descriptionLabel: {
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    description: {
        lineHeight: 24,
        marginBottom: 32,
        color: '#000',
    },
    button: {
        backgroundColor: Colors.light.secondary,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: Colors.light.secondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
