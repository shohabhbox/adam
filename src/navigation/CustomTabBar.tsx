import { Icon, Icons } from '@/components';
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

import { COLORS } from '../constant';

// 1. Setup Parametric Constants
const BAR_WIDTH = SCREEN_WIDTH; // Giving some side margin for the "floating" look
const BAR_HEIGHT = 70;
const CORNER_RADIUS = 20;
const CUTOUT_RADIUS = 30; // Slightly wider for a smoother look

const tabs = [
  { name: 'Home', icon: 'map-outline' },
  { name: 'Trips', icon: 'compass-outline' },
  { name: 'Add', icon: 'add-circle-outline' },
  { name: 'Saved', icon: 'location-outline' },
  { name: 'Offline', icon: 'wifi' },
];

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  // 2. Dynamic Position Calculation
  const activeIndex = state.index;
  const TAB_COUNT = state.routes.length;
  const TAB_WIDTH = BAR_WIDTH / TAB_COUNT;

  // Calculate the center of the currently selected tab
  const CUTOUT_CENTER_X = TAB_WIDTH * activeIndex + TAB_WIDTH / 2;

  const CUTOUT_LEFT_X = CUTOUT_CENTER_X - CUTOUT_RADIUS;
  const CUTOUT_RIGHT_X = CUTOUT_CENTER_X + CUTOUT_RADIUS;

  // 3. Build the Path based on activeIndex
  const d = `
    M 0, ${BAR_HEIGHT} 
    L 0, ${CORNER_RADIUS} 
    Q 0, 0 ${CORNER_RADIUS}, 0
    L ${CUTOUT_LEFT_X}, 0
    A ${CUTOUT_RADIUS}, ${CUTOUT_RADIUS} 0 0 0 ${CUTOUT_RIGHT_X}, 0
    L ${BAR_WIDTH - CORNER_RADIUS}, 0
    Q ${BAR_WIDTH}, 0 ${BAR_WIDTH}, ${CORNER_RADIUS}
    L ${BAR_WIDTH}, ${BAR_HEIGHT}
    Z
  `;

  return (
    <View style={styles.container}>
      <Svg width={BAR_WIDTH} height={BAR_HEIGHT} style={styles.svg}>
        <Path fill="#FFFFFF" d={d} />
      </Svg>

      <View style={styles.content}>
        {tabs.map((tab, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(tab.name)}
              style={styles.tabItem}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate(tab.name)}
                style={[
                  isFocused ? styles.floatingCircle : styles.iconContainer,
                ]}
              >
                <Icon
                  type={Icons.Ionicons}
                  name={tab.icon || ''}
                  color={isFocused ? '#FFA500' : COLORS.black + '70%'}
                  size={24}
                  onPress={() => navigation.navigate(tab.name)}
                />
              </TouchableOpacity>

              <Text
                style={[
                  styles.tabTitle,
                  isFocused && styles.selectedTabTitle,
                  {
                    color: isFocused ? '#FFA500' : COLORS.black + '50%',
                    fontWeight: isFocused ? '600' : '400',
                    marginBottom: isFocused ? 4 : 0,
                  },
                ]}
              >
                {tab.name}
              </Text>
              {/* <Text>dd</Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
  },
  svg: {
    position: 'absolute',
  },
  content: {
    flexDirection: 'row',
    height: BAR_HEIGHT,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingCircle: {
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: 'white',
    top: -35, // Matches the curve depth
    justifyContent: 'center',
    alignItems: 'center',
    // Elevation/Shadow to make it pop
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tabTitle: {
    // Your exact typography specs:
    fontFamily: 'Plus Jakarta Sans', // Ensure this font is linked in your project
    fontWeight: '600',
    fontSize: 12, // Adjusted slightly smaller for mobile fit, was 12.04px
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 2,
  },
  selectedTabTitle: {
    color: '#FFA500', // Orange for selected tab
    position: 'absolute',
    top: 38, // Position above the tab bar
  },
});
