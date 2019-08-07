import React from "react";
import { IUser } from "../../graphql";
import { TProps as ChipProps } from "..";
interface IProps extends ChipProps {
    user: IUser;
}
export default class UserChip extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
