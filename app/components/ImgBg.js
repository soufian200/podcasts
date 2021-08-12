import React from "react";
import { ImageBackground } from "react-native";

export default function ImgBg({ src }) {
    return <ImageBackground source={src} style={{ width: "100%", height: "100%" }} />
}