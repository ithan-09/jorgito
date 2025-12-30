import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function ProfileScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: Colors.light.background, dark: Colors.dark.background }}
            headerImage={
                <View style={styles.headerPlaceholder}>
                    <IconSymbol name="person.circle.fill" size={120} color="#fff" />
                </View>
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={{ color: '#cb1818ff' }}>Mi Perfil</ThemedText>
            </ThemedView>

            <ThemedView style={styles.section}>
                <View style={styles.userInfo}>
                    <ThemedText type="subtitle" style={{ color: '#000' }}>Invitado</ThemedText>
                    <ThemedText style={{ color: '#000' }}>guest@jorgito.com</ThemedText>
                </View>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Configuración</ThemedText>

                <View style={styles.row}>
                    <View style={styles.rowIcon}>
                        <IconSymbol name="bell.fill" size={20} color={Colors.light.primary} />
                        <ThemedText style={styles.rowText}>Notificaciones</ThemedText>
                    </View>
                    <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#767577', true: Colors.light.primary }} />
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <View style={styles.rowIcon}>
                        <IconSymbol name="moon.fill" size={20} color={Colors.light.secondary} />
                        <ThemedText style={styles.rowText}>Modo Oscuro</ThemedText>
                    </View>
                    <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#767577', true: Colors.light.secondary }} />
                </View>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Acerca de</ThemedText>
                <ThemedText style={{ color: '#000' }}>Jorgito Restaurant App v1.0.0</ThemedText>
                <ThemedText style={{ color: '#000' }}>Desarrollado con React Native y Expo.</ThemedText>
                <ThemedText style={{ color: '#000' }}>Desarrollado por ithan-09.</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.primary,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    section: {
        marginBottom: 24,
        backgroundColor: Colors.light.card,
        borderRadius: 12,
        padding: 16,
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    userInfo: {
        alignItems: 'center',
    },
    sectionTitle: {
        marginBottom: 16,
        color: '#000',
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
        color: '#000',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 8,
    }
});
