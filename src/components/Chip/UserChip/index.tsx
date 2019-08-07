import React from "react";
import Chip from "..";
import { IUser } from "src/components/graphql";
import Avatar from "src/components/Avatar";
import Typography from "src/components/Typography";
import { TProps as ChipProps } from "..";

interface IProps extends ChipProps {
  user: IUser;
}

export default class UserChip extends React.PureComponent<IProps> {
  render() {
    const { user, ...rest } = this.props;

    return (
      <Chip
        key={user.id}
        style={{
          paddingTop: "4px",
          paddingBottom: "4px",
          marginRight: "4px"
        }}
        dark
        className="mb-1"
        {...rest}
      >
        <div className="flex items-center">
          <Avatar
            size={20}
            src={user.avatar && user.avatar.small_url}
            className="mr-05"
          />
          <Typography.Small>{user.name}</Typography.Small>
        </div>
      </Chip>
    );
  }
}
