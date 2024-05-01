import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { ContainerStyle, MyMessageStyle, OtherMessageStyle } from "./styles";

type MessageProps = {
  myMessage: boolean;
  message: string;
  hour: string;
  imgProfile: string;
};

export default function Message({ hour, myMessage, message, imgProfile }: MessageProps) {
  return (
    <View
      style={[
        ContainerStyle.container,
        (
          myMessage
          ? MyMessageStyle.container
          : OtherMessageStyle.container
        )
      ]}
    >
      <TouchableOpacity
        style={ 
          myMessage ? MyMessageStyle.message : OtherMessageStyle.message
        }
        onLongPress={ () => console.log('Long Press')}
      >
        <Text>{ message }</Text>

        <View style={
          myMessage ? MyMessageStyle.dataMessage : OtherMessageStyle.dataMessage
        }>
          <Text style={ ContainerStyle.textHour }>{ hour }</Text>
        </View>
      </TouchableOpacity>

      <Image
        src={ imgProfile }
        style={ ContainerStyle.imgProfile }
      />
    </View>
  )
}