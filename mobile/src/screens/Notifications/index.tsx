import { ScrollView, Text, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import Notification from "../../components/Notification";
import { NotificationType } from "../../Types/Notification.type";

export default function Notifications() {
  const notifications: NotificationType[] = [
    {
      id: 'dfsdfs',
      title: 'APP',
      body: 'Você recebeu uma nova mensagem',
      date: new Date().getFullYear().toString(),
      type: 'chat',
      hour: '10:00',
    },
  ]


 return (
  <View>
    <HeaderScreen
      title="Notificações"
    />

    <ScrollView>
      {
        notifications.map((notification, index) => (
          <Notification
            key={ index }
            notification={ notification }
          />
        ))
      }
    </ScrollView>
  </View>
 )
}