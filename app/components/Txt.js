import React from "react"
import { Text } from "react-native"
import colors from "../utils/colors"
export default function Txt({ children, fontWeight = "Roboto_400Regular", style = { color: colors.text } }) {
    return <Text style={[{ fontFamily: fontWeight }, style]}>{children}</Text>
}