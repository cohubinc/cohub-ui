import { IBaseButtonProps } from "../Base";
import PlatformEnum from "src/definitions/types/TPlatform";

export type TPrimaryButtonProps<
  platform = PlatformEnum.web
> = (platform extends "ios" ? {} : IBaseButtonProps) & {
  platform: platform;
};
