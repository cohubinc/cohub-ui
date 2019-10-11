// import React, { CSSProperties, ReactNode } from "react";
// import { Platform, StyleProp, ViewStyle, View } from "react-native";

// interface IPlatformViewProps {
//   children: ReactNode;
//   style?: CSSProperties | StyleProp<ViewStyle>;
//   className?: string;
//   onClick?: () => void;
//   onMouseEnter?: () => void;
//   onMouseLeave?: () => void;
//   onFocus?: () => void;
//   onBlur?: () => void;
// }

// export default function PlatformView({
//   style,
//   className,
//   children
// }: IPlatformViewProps) {
//   if (Platform.OS === "web") {
//     return (
//       <div onMouse className={className} style={style as CSSProperties}>
//         {children}
//       </div>
//     );
//   }

//   return <View style={style as StyleProp<ViewStyle>}>{children}</View>;
// }
