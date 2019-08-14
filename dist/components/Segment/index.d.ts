import { CSSProperties, PureComponent } from "react";
import { ElevationLevel } from "../../definitions/enums/BoxShadow";
export interface ISegmentProps {
    style?: CSSProperties;
    className?: string;
    /**
     * If true, the Segment will get 1rem of padding on all sides
     */
    padded?: boolean;
    /**
     * The level of drop shadow that shows beneath the segment
     */
    elevation?: ElevationLevel;
    /**
     * If true, the Segment will use the contrast background and have no elevation
     */
    contrast?: boolean;
    /**
     * If true, the Segment will show a border
     */
    bordered?: boolean;
}
declare class Segment extends PureComponent<ISegmentProps> {
    static defaultProps: ISegmentProps;
    render(): JSX.Element;
}
export default Segment;
