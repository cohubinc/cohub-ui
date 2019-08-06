import add from "./Add";
import arrowDown from "./ArrowDown";
import arrowUp from "./ArrowUp";
import back from "./Back";
import bell from "./Bell";
import calculator from "./Calculator";
import calendar from "./Calendar";
import caretDown from "./CaretDown";
import checkmark from "./Checkmark";
import chevronDown from "./ChevronDown";
import chevronLeft from "./ChevronLeft";
import chevronRight from "./ChevronRight";
import circle from "./Circle";
import circleCheck from "./CircleCheck";
import circlePlus from "./CirclePlus";
import circlePlusInverted from "./CirclePlusInverted";
import circleRemove from "./CircleRemove";
import close from "./Close";
import columns from "./Columns";
import controlPanel from "./ControlPanel";
import dashboard from "./Dashboard";
import eye from "./Eye";
import forward from "./Forward";
import laptop from "./Laptop";
import report from "./Report";
import sales from "./Sales";
import save from "./Save";
import scales from "./Scales";
import search from "./Search";
import shipping from "./Shipping";
import tagDollar from "./TagDollar";
import trash from "./Trash";
import triangle from "./Triangle";
import tripleDotsVertical from "./TripleDotsVertical";
import userGroup from "./UserGroup";
import user from "./User";
import { IProps } from "../index";
import TIconName from "src/definitions/interfaces/TIconName";

type TIconMap = { [key in TIconName]: (props: IProps) => JSX.Element };
const icons: TIconMap = {
  add,
  arrowDown,
  arrowUp,
  bell,
  back,
  calculator,
  calendar,
  caretDown,
  checkmark,
  chevronDown,
  chevronLeft,
  chevronRight,
  circle,
  circleCheck,
  circlePlus,
  circlePlusInverted,
  circleRemove,
  close,
  columns,
  controlPanel,
  dashboard,
  eye,
  forward,
  laptop,
  report,
  sales,
  save,
  scales,
  search,
  shipping,
  tagDollar,
  trash,
  triangle,
  tripleDotsVertical,
  userGroup,
  user
};
export default icons;
// For generating examples in Docz
export const iconNames = Object.keys(icons) as TIconName[];
