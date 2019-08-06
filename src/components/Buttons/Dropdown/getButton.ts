import Buttons from "src/components/Buttons";
import ButtonType from "./definitions/ButtonType";

export const getButton = (type: ButtonType) => Buttons[type];
