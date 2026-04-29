import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '@/constant';
import { Icon, Icons } from '@/components';

interface Props {
  visible: boolean;
  onClose?: () => void;
}

const steps = [
  { title: 'Analysing your saved places', status: 'done' },
  { title: 'Mapping optimal route order', status: 'done' },
  { title: 'Generating AI recommendations', status: 'progress' },
  { title: 'Building day-by-day schedule', status: 'pending' },
];

const BuildingItineraryModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal 
      isVisible={visible} 
      onBackdropPress={onClose} 
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      statusBarTranslucent
    >
      <SafeAreaView style={styles.fullScreenContainer}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.content}>
          {/* TOP PROGRESS VISUAL */}
          <View style={styles.heroSection}>
            <View style={styles.outerCircle}>
              <View style={styles.middleCircle}>
                <View style={styles.innerCircle}>
                  <Icon type={Icons.Feather} name="star" color={COLORS.primary} size={28} />
                </View>
              </View>
            </View>

            <Text style={styles.title}>Building your itinerary...</Text>
            <Text style={styles.subtitle}>
              Our AI is crafting a personalised day-by-day schedule based on your
              saved places and trip dates.
            </Text>
          </View>

          {/* STEPS CARD */}
          <View style={styles.card}>
            {steps.map((item, index) => (
              <StepItem 
                key={index} 
                {...item} 
                isLast={index === steps.length - 1} 
              />
            ))}
          </View>
        </View>

        {/* OPTIONAL FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>This usually takes less than a minute</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const StepItem = ({ title, status, isLast }: any) => {
  const isDone = status === 'done';
  const isProgress = status === 'progress';

  return (
    <View style={[styles.stepRow, isLast && { marginBottom: 0 }]}>
      <View style={styles.indicatorCol}>
        <View
          style={[
            styles.circle,
            isDone && { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
            isProgress && { borderWidth: 2, borderColor: COLORS.primary, backgroundColor: '#fff' },
          ]}
        >
          {isDone && <Icon type={Icons.Feather} name="check" color="#fff" size={14} />}
          {isProgress && <View style={styles.activeDot} />}
        </View>
        {!isLast && <View style={[styles.line, isDone && { backgroundColor: COLORS.primary }]} />}
      </View>

      <View style={styles.textCol}>
        <Text style={[styles.stepText, isProgress && styles.boldText]}>{title}</Text>
        <Text
          style={[
            styles.status,
            isDone && { color: '#10B981' },
            isProgress && { color: COLORS.primary },
          ]}
        >
          {isDone ? 'Done' : isProgress ? 'In Progress' : 'Waiting'}
        </Text>
      </View>
    </View>
  );
};

export default BuildingItineraryModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0, // Makes it full screen
    justifyContent: 'flex-end',
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Slightly cleaner off-white
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  outerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 22,
    fontWeight: '700',
    color: '#0B132B',
    marginTop: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  indicatorCol: {
    alignItems: 'center',
    width: 30,
  },
  textCol: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 24,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#F1F5F9',
    position: 'absolute',
    top: 26,
    bottom: 0,
    zIndex: 1,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  stepText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 15,
    color: '#0B132B',
    marginBottom: 4,
  },
  boldText: {
    fontFamily: 'PlusJakartaSans-Bold',
    color: COLORS.primary,
  },
  status: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    color: '#9CA3AF',
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    color: '#9CA3AF',
  },
});