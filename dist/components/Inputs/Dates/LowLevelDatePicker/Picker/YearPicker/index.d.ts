import TPicker from "../../definitions/types/TPicker";
interface IProps {
    onChange: (year: string) => void;
    picker: TPicker;
    goToSection: (picker: TPicker) => void;
    minDate: {
        minMonth: number;
        minDay: number;
        minYear: number;
    };
    dateTime: {
        month: string;
        day: string;
        year: string;
    };
}
export default function YearPicker({ onChange, picker, goToSection, minDate: { minMonth, minDay, minYear }, dateTime }: IProps): JSX.Element;
export {};
