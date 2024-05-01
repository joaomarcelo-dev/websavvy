import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const SectionMessagesStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  }
});

const SectionsSendMessageStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.blackOpacity,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  buttonSend: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
  }
});

export {
  ContainerStyle,
  SectionMessagesStyle,
  SectionsSendMessageStyle
};