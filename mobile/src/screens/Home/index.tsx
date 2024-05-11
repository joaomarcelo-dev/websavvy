import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ContainerStyle, HeaderStyle, SectionStyle, SpeedAccessStyle } from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CardPlans from "../../components/CardPlans";

import { imgProfileDefault } from "../../global/conf/imagesDefault";


export default function Home({ navigation }) {

  return (
    <ScrollView style={ ContainerStyle.container }>
      <View style={ HeaderStyle.container }>
        <TouchableOpacity
          style={ HeaderStyle.profileInfo }
          onPress={ () => navigation.navigate('Profile') }
        >
          <Image
            style={ HeaderStyle.imageProfile }
            src={ imgProfileDefault }
          />
          <Text
            style={ HeaderStyle.textWelcome }
          >
            Olá,
            {`\n`}
            João Marcelo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => navigation.navigate('Notifications')}
        >
          <Ionicons
            name="notifications-outline" 
            size={30}
            style={ HeaderStyle.iconNotification }
          />
        </TouchableOpacity>
      </View>

      <View style={ SectionStyle.container }>
        <View>
          <Text style={ SpeedAccessStyle.title }>
            Acesso Rápido
          </Text>

          <View>
            <View style={ SpeedAccessStyle.containerButtons }>
              <TouchableOpacity
                style={ SpeedAccessStyle.button }
                onPress={ () => navigation.navigate('Materials')}
              >
                <Octicons
                  name="book"
                  size={25}
                  style={ SpeedAccessStyle.iconButton }
                />
                <Text>Materiais</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={ SpeedAccessStyle.button }
                onPress={ () => navigation.navigate('Revenues')}
              >
                <MaterialIcons
                  name="my-library-books"
                  size={25}
                  style={ SpeedAccessStyle.iconButton }
                />
                <Text>Receitas</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={ SpeedAccessStyle.button }
                onPress={ () => navigation.navigate('Chat')}
              >
                <MaterialIcons
                  name="mark-unread-chat-alt"
                  size={25}
                  style={ SpeedAccessStyle.iconButton }
                />
                <Text>Chat</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={ SpeedAccessStyle.button }
                onPress={ () => navigation.navigate('Prescription')}
              >
                <FontAwesome5
                  name="hand-holding-medical"
                  size={25}
                  style={ SpeedAccessStyle.iconButton }
                />
                <Text>Prescrição</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={ SpeedAccessStyle.buttonArgendConsult }
              onPress={ () => navigation.navigate('NewAppointment')}
            >
              <Ionicons
                name="calendar-clear"
                size={25}
                style={ SpeedAccessStyle.iconArgend }
              />

              <Text style={ SpeedAccessStyle.textArgend }>
                Agendar uma consulta
              </Text>
            </TouchableOpacity>
          </View>

          <CardPlans
            nameSection="Plano alimentar"
            textViewMore="Ver mais"
            textNotFoundItens="Seu profissional ainda não disponibilizou seu plano alimentar"
            textButton="Converse com seu profissional"
          />

          <CardPlans
            nameSection="Plano alimentar"
            textViewMore="Ver mais"
            textNotFoundItens="Seu profissional ainda não disponibilizou seu plano alimentar"
            textButton="Converse com seu profissional"
          />
        </View>
      </View>
    </ScrollView>
  )
}