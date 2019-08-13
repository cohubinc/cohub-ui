/// <reference types="react" />
import { TChipProps } from "../";
interface IAvatarChipProps extends TChipProps {
    name: string;
    avatarUrl?: string;
}
export default function AvatarChip(props: IAvatarChipProps): JSX.Element;
export {};
