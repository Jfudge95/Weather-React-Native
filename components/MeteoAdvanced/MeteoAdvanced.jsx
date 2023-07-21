import { View } from "react-native";
import {
  StyledContainer,
  StyledValue,
  s,
  StyledLabel,
} from "./MeteoAdvanced.style.js";
import { Txt } from "../Txt/Txt.jsx";
export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>PlaceHolder{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>PlaceHolder{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>PlaceHolder{windspeed}</StyledLabel>
        <StyledValue>Windspeed</StyledValue>
      </StyledContainer>
    </View>
  );
}
