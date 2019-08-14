/// <reference types="react" />
import { TChipProps } from "../";
interface IAvatarChipProps extends TChipProps {
    name: string;
    avatarUrl: string | null | undefined;
}
export default function AvatarChip(props: IAvatarChipProps): JSX.Element;
export {};
