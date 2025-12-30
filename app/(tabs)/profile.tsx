import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ProfileScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#FFF8F0', dark: '#c95523ff' }}
            headerImage={
                <View style={styles.headerPlaceholder}>
                    <IconSymbol name="person.circle.fill" size={120} color="#FF6B00" />
                </View>
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Mi Perfil</ThemedText>
            </ThemedView>

            <ThemedView style={styles.section}>
                <View style={styles.userInfo}>
                    <ThemedText type="subtitle">Invitado</ThemedText>
                    <ThemedText>guest@jorgito.com</ThemedText>
                </View>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Configuración</ThemedText>

                <View style={styles.row}>
                    <View style={styles.rowIcon}>
                        <IconSymbol name="bell.fill" size={20} color="#e81d1dff" />
                        <ThemedText style={styles.rowText}>Notificaciones</ThemedText>
                    </View>
                    <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#494545ff', true: '#e36810ff' }} />
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <View style={styles.rowIcon}>
                        <IconSymbol name="moon.fill" size={20} color="#0e0d0dff" />
                        <ThemedText style={styles.rowText}>Modo Oscuro</ThemedText>
                    </View>
                    <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#767577', true: '#FF6B00' }} />
                </View>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Acerca de</ThemedText>
                <ThemedText>Jorgito Restaurant App v1.0.0</ThemedText>
                <ThemedText>Desarrollado con React Native y Expo.</ThemedText>
                <ThemedText>Desarrollado por ithan-09.</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea7425ff',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    section: {
        marginBottom: 24,
        backgroundColor: '#953333ff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    userInfo: {
        alignItems: 'center',
    },
    sectionTitle: {
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    rowIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    rowText: {
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 8,
    }
});
