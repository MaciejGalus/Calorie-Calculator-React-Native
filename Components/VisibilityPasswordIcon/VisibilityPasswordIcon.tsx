import { TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

type VisibilityIconProps = {
  onPressToggler: () => void;
  isDisabled: boolean;
  hidePassword: boolean;
};

const VisibilityPasswordIcon: React.FC<VisibilityIconProps> = ({
  onPressToggler,
  isDisabled,
  hidePassword,
}) => {
  return (
    <TouchableOpacity onPress={onPressToggler} disabled={isDisabled}>
      {hidePassword ? (
        <Icon name="eye-with-line" size={30} color="darkgray" />
      ) : (
        <Icon name="eye" size={30} color="darkgray" />
      )}
    </TouchableOpacity>
  );
};

export default VisibilityPasswordIcon;

const styles = StyleSheet.create({
  passwordIcon: {
    width: 35,
    height: 35,
    borderWidth: 1,
  },
});
