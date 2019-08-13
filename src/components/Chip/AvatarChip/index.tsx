import React from "react";
import Avatar from "src/components/Avatar";
import Chip from "../";
import Typography from "src/components/Typography";
import { TChipProps } from "../";

interface IAvatarChipProps extends TChipProps {
  name: string;
  avatarUrl?: string;
}

export default function AvatarChip(props: IAvatarChipProps) {
  const { name, avatarUrl, ...rest } = props;

  return (
    <Chip
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
        <Avatar size={20} src={avatarUrl} className="mr-05" />
        <Typography.Small>{name}</Typography.Small>
      </div>
    </Chip>
  );
}
