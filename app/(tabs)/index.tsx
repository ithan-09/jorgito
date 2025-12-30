import { useRouter } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.background, dark: Colors.dark.background }}
      headerImage={
        <Image
          source={require('@/assets/images/restaurante_header.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a Jorgito!</ThemedText>
        <IconSymbol name="house.fill" size={32} color={Colors.light.primary} />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">El mejor sabor de la ciudad</ThemedText>
        <ThemedText>
          Disfruta de nuestros deliciosos platillos preparados con los ingredientes más frescos.
          Desde nuestras famosas ensaladas hasta nuestros cortes premium.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Horario</ThemedText>
        <ThemedText>
          Lunes a Viernes: 9:00 AM - 10:00 PM{'\n'}
          Sábado y Domingo: 10:00 AM - 11:00 PM
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.promoContainer}>
        <ThemedText type="subtitle" style={styles.promoTitle}>¡Oferta Especial!</ThemedText>
        <ThemedText style={{ color: '#fff' }}>
          2x1 en todas las hamburguesas los martes.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 24,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.6,
  },
  promoContainer: {
    backgroundColor: Colors.light.secondary, // vivid teal for contrast
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  promoTitle: {
    color: '#fff',
    marginBottom: 4,
  }
});
