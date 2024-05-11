import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import { ContainerStyle, SectionMessagesStyle, SectionsSendMessageStyle } from "./styles";
import Message from "../../components/Message";

import { v4 as uuid } from 'uuid';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const messageData = [
  {
    id: 1,
    message: 'Olá, tudo bem?',
    date: '12/12/2021',
    hour: '12:00',
    user: {
      id: 1,
      name: 'João Marcelo',
      imgProfile: 'https://avatars.githubusercontent.com/u/62879503?v=4'
    }
  },

  {
    id: 2,
    message: 'Tudo bem, e você?',
    date: '12/12/2021',
    hour: '12:01',
    user: {
      id: 2,
      name: 'Maria',
      imgProfile: 'https://avatars.githubusercontent.com/u/62879503?v=4'
    }
  },

  {
    id: 3,
    message: 'Como posso ajudar?',
    date: '12/12/2021',
    hour: '12:01',
    user: {
      id: 2,
      name: 'Maria',
      imgProfile: 'https://avatars.githubusercontent.com/u/62879503?v=4'
    }
  },
]

const userId = 1;

export default function Chat() {
  return (
    <View style={ ContainerStyle.container }>
      <HeaderScreen
        title="Chat"
      />


      <ScrollView style={ SectionMessagesStyle.container }>
        {
          messageData.map((message) => (
            <Message
              key={ message.id }
              myMessage={ message.user.id === userId }
              message={ message.message }
              hour={ message.hour }
              imgProfile={ message.user.imgProfile }
            />
          ))
        }
      </ScrollView>

      <View style={ SectionsSendMessageStyle.container }>
        <TextInput
          style={ SectionsSendMessageStyle.textInput }
        />

        {/* <TouchableOpacity
          style={ SectionsSendMessageStyle.buttonCamera }
        >
          <MaterialCommunityIcons
            name="camera"
            size={20}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={ SectionsSendMessageStyle.buttonSend }
        >
          <MaterialCommunityIcons
            name="send"
            size={ 25 }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}