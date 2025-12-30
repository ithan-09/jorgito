import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabBarBackground() {
    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                {
                    backgroundColor: Platform.select({
                        ios: 'transparent',
                        default: '#ffffff',
                    }),
                },
            ]}>
            {Platform.OS === 'ios' && (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        { backgroundColor: 'rgba(255, 255, 255, 0.8)' }
                    ]}
                />
            )}
        </View>
    );
}

export function useBottomTabOverflow() {
    const tabHeight = useBottomTabBarHeight();
    const { bottom } = useSafeAreaInsets();
    return tabHeight - bottom;
}
