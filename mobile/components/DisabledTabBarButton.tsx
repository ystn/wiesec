import { Pressable } from "react-native";

const DisabledTabBarButton = ({ style, ...props }: any) => (
  <Pressable disabled style={[{ opacity: 0.2 }, style]} {...props} />
)

export default DisabledTabBarButton;