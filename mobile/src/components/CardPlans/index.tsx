import { Text, TouchableOpacity, View } from "react-native";
import { CardPlansStyle } from "./style";

type CardPlansPropType = {
  nameSection: string,
  textViewMore: string,
  textNotFoundItens: string,
  textButton: string,
}

export default function CardPlans({ nameSection, textButton, textNotFoundItens, textViewMore }: CardPlansPropType) {
  return (
    <View style={ CardPlansStyle.container }>
      <View style={ CardPlansStyle.topOptions }>
        <Text style={ CardPlansStyle.textNameCard }>{ nameSection }</Text>
        <Text style={ CardPlansStyle.textMoreOptions }>{ textViewMore }</Text>
      </View>

      <View style={ CardPlansStyle.containerList }>
        <Text style={ CardPlansStyle.textNotFoundItens }>
          { textNotFoundItens }
        </Text>

        <TouchableOpacity style={ CardPlansStyle.buttonRedirect }>
          <Text style={ CardPlansStyle.textButton }>{ textButton }</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}