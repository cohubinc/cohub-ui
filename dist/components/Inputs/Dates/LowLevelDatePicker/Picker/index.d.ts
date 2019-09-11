import { CSSProperties } from "react";
import TPicker from "../definitions/types/TPicker";
export interface IPickerProps {
    picker: TPicker;
    dateTime: {
        month: string;
        day: string;
        year: string;
    };
    minDate: {
        minMonth: number;
        minDay: number;
        minYear: number;
    };
    setMonthAndDay: (arg: {
        month: string;
        day: string;
    }) => void;
    setMonth: (month: string) => void;
    setYear: (year: string) => void;
    style?: CSSProperties;
    open: boolean;
    goToSection: (picker: TPicker) => void;
}
export default function Picker(props: IPickerProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map