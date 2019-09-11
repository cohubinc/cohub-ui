/// <reference types="react" />
import TPicker from "../../definitions/types/TPicker";
interface IProps {
    dateTime: {
        month: string;
        day?: string;
        year?: string;
    };
    onChange: (arg: {
        month: string;
        day: string;
    }) => void;
    goToSection: (picker: TPicker) => void;
    picker: TPicker;
}
export default function DayPicker(props: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map