import { NotificationManager } from 'react-notifications';

export default (type: 'info' | 'success' | 'warning' | 'error', message: string, title: string = '', duration: number = 5000) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message, title, duration);
      break;
    case 'success':
      NotificationManager.success(message, title, duration);
      break;
    case 'warning':
      NotificationManager.warning(message, title, duration);
      break;
    case 'error':
      NotificationManager.error(message, title, duration);
      break;
  }
};
