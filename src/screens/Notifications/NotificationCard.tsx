import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Icons } from '@/components';
import styles from './styles';

const getTypeStyles = (type: string) => {
  switch (type) {
    case 'invitation':
      return {
        color: '#0EA5A8',
        bg: '#E6F4F2',
        icon: 'send',
      };
    case 'friend':
      return {
        color: '#8B5CF6',
        bg: '#F3E8FF',
        icon: 'user',
      };
    case 'update':
      return {
        color: '#F59E0B',
        bg: '#FEF3C7',
        icon: 'map-pin',
      };
    default:
      return {
        color: '#0EA5A8',
        bg: '#E6F4F2',
        icon: 'bell',
      };
  }
};

const NotificationCard = ({ item }: any) => {
  const { color, bg, icon } = getTypeStyles(item.type);

  return (
    <View style={styles.card}>
      {/* LEFT BORDER */}
      <View style={[styles.leftBar, { backgroundColor: color }]} />

      {/* CONTENT */}
      <View style={styles.content}>
        {/* TOP ROW */}
        <View style={styles.topRow}>
          <View style={styles.leftContent}>
            <View style={[styles.iconWrap, { backgroundColor: bg }]}>
              <Icon type={Icons.Feather} name={icon} size={16} color={color} />
            </View>

            <View style={{ flex: 1 }}>
              <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.row}>
                  <Text style={styles.time}>{item.time}</Text>
                  {item.unread && (
                    <View style={[styles.dot, { backgroundColor: color }]} />
                  )}
                </View>
              </View>

              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
        </View>

        {/* CTA */}
        {item.cta && (
          <TouchableOpacity style={[styles.ctaBtn, { backgroundColor: bg }]}>
            <Text style={[styles.ctaText, { color }]}>{item.cta} </Text>
            <Icon
              type={Icons.Feather}
              name="arrow-right"
              color={color}
              size={12}

              style={{marginTop:2}}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* UNREAD DOT */}
    </View>
  );
};

export default NotificationCard;
