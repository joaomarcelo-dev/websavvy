import { Button, View } from "react-native";
import { dispatchNotification } from "../../dispatches/notification.dispatch";

export default function Test() {
  return (
    <View>
      <Button title="Test" onPress={() => dispatchNotification({ body: 'Ai dentro', title: 'Ai dentro' })} />
    </View>
  )
}