import { COLORS } from '@/constant';
import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },

  topImage: {
    width: "100%",
    height: 250,
    aspectRatio: 6,
  },


  secureBadge: {
    position: 'absolute',
    right: 20,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#E6F9F0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  secureText: {
    marginLeft: 5,
    color: 'green',
    fontSize: 12,
  },

  tag: {
    alignSelf: 'center',
    backgroundColor: '#E6F4F2',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 10,
  },

  tagText: {
    fontSize: 12,
    color: COLORS.primary,
    letterSpacing: 1,
  },

  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  badge: {
    flexDirection: 'row',
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },

  badgeText: {
    marginLeft: 5,
    fontSize: 12,
  },

  secondaryBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    color: COLORS.textSecondary,
  },
});

export default localStyles;
