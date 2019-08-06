/// <reference types="react" />
import TPicker from "../../definitions/types/TPicker";
interface IProps {
    month?: string;
    day?: string;
    year?: string;
    onClick: (picker: TPicker) => void;
    picker: TPicker;
}
export default function DateHeader({ picker, day, month, year, onClick }: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map