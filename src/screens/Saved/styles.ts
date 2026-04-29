import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  small: {
    fontSize: 12,
    color: '#8B8CA7',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  link: {
    color: COLORS.primary,
  },
});

export default styles;
