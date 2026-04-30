import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SCREENS } from '@/constant';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const steps = [
  { id: 1, label: 'Fetching URL content', time: '0.3s' },
  { id: 2, label: 'Parsing location data', time: '0.8s' },
  { id: 3, label: 'Validating coordinates' },
  { id: 4, label: 'Enriching with metadata' },
];

const ProcessingScreen = () => {
  const navigation = useAppNavigation<'Processing'>();

  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // 🔥 Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Step sync with progress
  useEffect(() => {
    if (progress > 10) setActiveStep(1);
    if (progress > 40) setActiveStep(2);
    if (progress > 70) setActiveStep(3);
  }, [progress]);

  // 🔥 Navigate when complete
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        navigation.replace(SCREENS.ImportResultsScreen);
      }, 600);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      {/* LINK */}
      <View style={styles.linkBox}>
        <View style={styles.dot} />
        <Text style={styles.linkText}>
          maps.google.com/place/Colosseum/Rome...
        </Text>
      </View>

      {/* PROGRESS */}
      <View style={styles.progressWrap}>
        <View style={styles.circle}>
          <Text style={styles.percent}>{progress}%</Text>
          <Text style={styles.sub}>analyzing</Text>
        </View>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Analyzing destination</Text>

      <Text style={styles.desc}>
        Hang tight while we extract and verify your location data
      </Text>

      {/* STEPS */}
      <View style={styles.card}>
        {steps.map((item, index) => {
          const isDone = index < activeStep;
          const isActive = index === activeStep;

          return (
            <View key={item.id} style={styles.stepRow}>
              <View
                style={[
                  styles.stepIcon,
                  isDone && styles.done,
                  isActive && styles.active,
                ]}
              />

              <View style={{ flex: 1 }}>
                <Text style={[styles.stepText, isDone && styles.doneText]}>
                  {item.label}
                </Text>
              </View>

              {item.time && <Text style={styles.time}>{item.time}</Text>}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProcessingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    paddingTop: 80,
  },

  /* LINK */
  linkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },

  linkText: {
    fontSize: 12,
    color: '#6B7280',
  },

  /* PROGRESS */
  progressWrap: {
    marginTop: 40,
    alignItems: 'center',
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 10,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  percent: {
    fontSize: 26,
    fontWeight: '700',
  },

  sub: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  /* TEXT */
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
  },

  desc: {
    textAlign: 'center',
    marginTop: 6,
    color: '#8B8CA7',
    paddingHorizontal: 40,
  },

  /* CARD */
  card: {
    marginTop: 30,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  stepIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    marginRight: 10,
  },

  active: {
    backgroundColor: COLORS.primary,
  },

  done: {
    backgroundColor: '#10B981',
  },

  stepText: {
    fontSize: 13,
    color: '#9CA3AF',
  },

  doneText: {
    color: '#111827',
    fontWeight: '500',
  },

  time: {
    fontSize: 12,
    color: COLORS.primary,
  },
});
