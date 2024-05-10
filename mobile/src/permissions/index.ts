import * as Notification from 'expo-notifications';

const requestNotificationPermission = async () => {
  try {
    const { status } = await Notification.getPermissionsAsync();
    console.log('>>>>>>>>>>>>>>>>> Atorização de notificações: ', status);
    
    await Notification.requestPermissionsAsync();

    if (status !== 'granted') {
      const { status: newStatus } = await Notification.requestPermissionsAsync();
      
      console.log('>>>>>>>>>>>>>>> Pedindo permisão para acessar as notificações');
      

      if (newStatus !== 'granted') {
        throw new Error('Permission denied');
      }
    }
  } catch (error) {
    console.error('Failed to get notification permission:', error.message);
  }
};

const main = async () => {
  try {
    await requestNotificationPermission();
  } catch (error) {
    console.error('Failed to initialize notification:', error.message);
  }
};

main();
