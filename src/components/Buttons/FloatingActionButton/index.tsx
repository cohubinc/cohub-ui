import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState
} from "react";
import Icon, { IIconProps } from "../../Icon";
import Color from "src/definitions/enums/Color";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Buttons from "..";
import { TBlankButtonProps } from "src/components/Buttons/Blank";

interface IProps {
  icon: IIconProps["name"];
  iconColor?: IIconProps["color"];
  backgroundColor?: Color;
  size?: number;
  elevation?: ElevationLevel;
}

export interface IFabRefObject {
  /**
   * Plays uh-uh-shake animation
   */
  shake: (shakeColor?: string) => void;
}

// tslint:disable only-arrow-functions
export type TFloatingActionButtonProps = IProps & TBlankButtonProps;
const FloatingActionButton: React.RefForwardingComponent<
  IFabRefObject,
  TFloatingActionButtonProps
> = function(props, ref) {
  const {
    icon,
    iconColor,
    backgroundColor = Color.trueWhite,
    size = 24,
    elevation = 0,
    ...rest
  } = props;

  const [shaking, setShaking] = useState(false);
  const [shakeColor, setShakeColor] = useState<string | undefined>();

  useImperativeHandle(
    ref,
    (): IFabRefObject => ({
      shake: color => {
        color && setShakeColor(color);
        setShaking(true);

        setTimeout(() => {
          setShaking(false);
          setShakeColor(undefined);
        }, 250);
      }
    })
  );

  const dpLevel = `dp${elevation}`;

  return (
    <Buttons.Blank
      className={`flex items-center justify-center ${
        shaking ? "uh-uh-shake" : ""
      }`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: shakeColor || (backgroundColor as any),
        boxShadow: BoxShadow[dpLevel as any],
        cursor: "pointer",
        border: "none",
        transition: "all 20ms ease-in"
      }}
      {...rest}
    >
      <Icon name={icon} size={size / 1.5} color={iconColor} />
    </Buttons.Blank>
  );
};

export default forwardRef(FloatingActionButton);
