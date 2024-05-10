import { Text, View } from "react-native";
import { ContainerStyle } from "./styles";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NotificationType } from "../../Types/Notification.type";

type NotificationProps = {
  notification: NotificationType
}

export default function Notification({ notification: { date, hour, body, type } }: NotificationProps, { navigation }) {


  return (
    <View style={[
      ContainerStyle.container,
    ]}>

      <View
        style={
          ContainerStyle.notificationDatails
        }
      >
        <MaterialCommunityIcons
          name={
            type === 'chat'
            ? 'chat'
            : type === 'plan'
            ? 'clipboard-text'
            : 'alert'
          }
          size={24}
          color="black"
        />

        <Text>{ body }</Text>
      </View>

      <View style={ ContainerStyle.notificationInfo }>
        <Text>{ date }</Text>
        <Text>{ hour }</Text>
      </View>

    </View>
  )
}