import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { hidePasswordIcon, showPasswordIcon } from "../../constants";

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
      <Image
        style={styles.passwordIcon}
        source={hidePassword ? hidePasswordIcon : showPasswordIcon}
      />
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
