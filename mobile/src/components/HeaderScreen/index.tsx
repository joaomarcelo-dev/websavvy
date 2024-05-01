import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { HeaderStyles } from "./style";

type HeaderScreenProps = {
  navigation: any;
  title: string;
}

export default function HeaderScreen({ navigation, title }: HeaderScreenProps) {
  return (
    <View style={ HeaderStyles.container }>
      <TouchableOpacity
        onPress={ () => navigation.goBack() }
      >
        <Ionicons
          name="arrow-back"
          size={25}
        />
      </TouchableOpacity>

      <Text style={ HeaderStyles.profileText }>{ title }</Text>

      <View />
    </View>
  );
}