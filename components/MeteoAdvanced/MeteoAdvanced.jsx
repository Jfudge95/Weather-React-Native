import { View } from "react-native";
import {
  StyledContainer,
  StyledValue,
  s,
  StyledLabel,
} from "./MeteoAdvanced.style.js";
import { Txt } from "../Txt/Txt.jsx";
export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  const windspeedMph = Math.round(windspeed * 0.621371);
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{windspeedMph} mp/h</StyledLabel>
        <StyledValue>Windspeed</StyledValue>
      </StyledContainer>
    </View>
  );
}
