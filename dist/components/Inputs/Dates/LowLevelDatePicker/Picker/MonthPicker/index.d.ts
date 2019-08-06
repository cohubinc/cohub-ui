/// <reference types="react" />
import TPicker from "../../definitions/types/TPicker";
interface IProps {
    month?: string;
    onChange: (month: string) => void;
    picker: TPicker;
    goToSection: (picker: TPicker) => void;
}
export default function MonthPicker({ month, onChange, picker, goToSection }: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map