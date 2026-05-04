import { CustomButton } from '@/components';
import { IMAGES, SCREENS } from '@/constant';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }: { navigation: any }) => {
  function onNavigate() {
    navigation.navigate(SCREENS.Onboard);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.splashScreen} // Reference: splash Screen (2).jpg
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Glass-Style Container */}
        <View style={styles.glassContainer}>
          {/* 
                By using a very tight gradient from 80% opacity to 100%, 
                we simulate the depth of frosted glass.
            */}
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.25)',
              'rgba(255, 255, 255, 0.45)',
              'rgba(255, 255, 255, 0.65)',
              'rgba(255, 255, 255, 0.65)',
            ]}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.buttonGroup}>
            {/* Primary Action */}

            <CustomButton title="Get Started →" onPress={onNavigate} />

            {/* Secondary Action: Semi-transparent glass button */}
            <TouchableOpacity style={styles.glassButton} activeOpacity={0.7} onPress={onNavigate} >
              <Text style={styles.secondaryButtonText}>
                I Already Have an Account
              </Text>
            </TouchableOpacity>

            {/* Footer Text */}
            <Text style={styles.footerText}>
              By continuing, you agree to our
              <Text style={styles.footerLink}> Terms</Text> &
              <Text style={styles.footerLink}> Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',

  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  glassContainer: {
    width: '95%',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    // The "Glass Border" - thin and bright at the top
    borderTopWidth: 1.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    alignSelf: 'center',
  },
  buttonGroup: {
    // alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#008B9B',
    width: width - 48,
    height: 58,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  glassButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    height: 58,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 25,
    marginTop: 20,
  },
  secondaryButtonText: {
    color: '#1A1A1A',
    fontSize: 17,
    fontWeight: '600',
  },
  footerText: {
    color: '#707070',
    fontSize: 13,
    textAlign: 'center',
  },
  footerLink: {
    color: '#222',
    fontWeight: '700',
  },
});

export default SplashScreen;
