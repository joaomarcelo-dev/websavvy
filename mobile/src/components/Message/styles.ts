import { StyleSheet } from "react-native";
import { colors } from "../../global";

const ContainerStyle = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  textHour: {
    fontSize: 10,
    marginTop: 5,
  },

  imgProfile: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 50,
  },
});


const MyMessageStyle = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },

  message: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderTopRightRadius: 10,
  },

  dataMessage: {
    alignSelf: 'flex-end',
  }
});

const OtherMessageStyle = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },

  message: {
    backgroundColor: colors.blackOpacity,
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },

  dataMessage: {
    alignSelf: 'flex-start',
  },
});

export {
  MyMessageStyle,
  ContainerStyle,
  OtherMessageStyle
}