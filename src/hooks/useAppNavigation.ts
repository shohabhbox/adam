import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  AuthStackParamList,
  AppStackParamList,
  RootStackParamList,
} from '@/types/navigation';

/**
 * Generic Navigation Hook
 */
export const useAppNavigation = <
  T extends keyof AuthStackParamList | keyof AppStackParamList | keyof RootStackParamList
>() => {
  return useNavigation<NativeStackNavigationProp<any, T>>();
};