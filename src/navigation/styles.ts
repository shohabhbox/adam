import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  tabContainer: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  tabItem: {
    alignItems: 'center',
  },

  label: {
    fontSize: 11,
    marginTop: 4,
  },

  homeCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default styles;
