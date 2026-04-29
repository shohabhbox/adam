import { COLORS } from '@/constant/config';
import { Alert, Platform } from 'react-native';

const isIos = Boolean(Platform.OS === 'ios');

class utils {
  confirmAlert(title: string, msg: string, callback: CallableFunction) {
    Alert.alert(
      title,
      msg,
      [
        { text: 'NO', onPress: () => callback('error') },
        { text: 'YES', onPress: () => callback('success') },
      ],
      { cancelable: false },
    );
  }

  isRoleAllowed = (
    userRole: string | null,
    allowedRoles: string[],
  ): boolean => {
    return userRole ? allowedRoles.includes(userRole) : false;
  };
  isEmpty(obj: any) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  isObjectEmplty(obj: any) {
    if (Object.keys(obj).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  isNull(obj: any) {
    if (obj === null || obj === undefined || obj === '') {
      return true;
    } else {
      return false;
    }
  }

  keyExtractor() {
    return Math.random().toString();
  }

  hasPatterns(text: string) {
    // Define regex patterns for URLs, emails, phone numbers, and mentions
    const urlPattern = /(https?:\/\/\S+|www\.\S+)/g;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const phonePattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const mentionPattern = /@\w+/g;

    // Find all URLs, emails, phone numbers, and mentions in the text
    const urls = text?.match(urlPattern);
    const emails = text?.match(emailPattern);
    const phones = text?.match(phonePattern);
    const mentions = text?.match(mentionPattern);

    // Return true if any pattern is found, otherwise false
    return !!(urls || emails || phones || mentions);
  }

  validateEmail(str: string) {
    var pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(str);
  }
  validateUrl(url: string) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlRegex.test(url)) {
      return true;
    } else {
      return false;
    }
  }
  convertDate(date: any) {
    let day = date.split('/');
    return `${day[2]}-${day[1]}-${day[0]}`;
  }

  convertFormData(val: any) {
    var filename = val?.path.match(/.*\/(.*)$/)[1];

    return {
      name: filename,
      type: val.mime,
      uri: isIos ? val.path.replace('file://', '') : val.path,
    };
  }

  isEmptyOrSpaces(str: any) {
    return str === null || str.match(/^ *$/) !== null;
  }

  getStatusStyles(status: string) {
    switch (status) {
      case 'Pending':
        return {
          bg: '#E6F4F6',
          text: COLORS.primary,
        };

      case 'Decline':
        return {
          bg: '#FDECEC',
          text: '#E53935',
        };

      case 'Mutually matched':
        return {
          bg: '#E8F5E9',
          text: '#43A047',
        };

      case 'Premium':
        return {
          bg: '#E6F4F6',
          text: COLORS.primary,
        };
      case 'Expired':
        return {
          bg: '#FDECEC',
          text: '#E53935',
        };

      default:
        return {
          bg: '#F5F5F5',
          text: '#757575',
        };
    }
  }

  showResponseError(error: any) {
    if (error.message === 'Network Error') {
      let error = 'Please check your network';
      return error;
    } else {
      if (error.response) {
        let errorCode = JSON.stringify(error.response.status);

        console.log('error.response', JSON.stringify(error.response?.data));

        if (errorCode === '400') {
          let response = error.response.data;
          var error = '';
          if (this.isEmpty(response.data)) {
            error = response.message;
          } else {
            error = response.data;
          }
          return error;
        } else if (errorCode === '405') {
          return 'API method not allowed!';
        } else if (errorCode === '404') {
          return 'API not found!';
        } else if (errorCode === '401') {
          return error.response.data;
        } else if (errorCode === '500') {
          return error.response.data;
        } else {
          return error?.response?.data?.error;
        }
      }
    }
  }

  isImageUrl(url: string) {
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(url);
  }
}

export default new utils();
