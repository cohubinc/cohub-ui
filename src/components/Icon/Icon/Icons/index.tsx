import add from "./Add";
import arrowDown from "./ArrowDown";
import arrowUp from "./ArrowUp";
import back from "./Back";
import bell from "./Bell";
import boxAdd from "./BoxAdd/index";
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
import filter from "./Filter";
import forward from "./Forward";
import laptop from "./Laptop";
import list from "./List";
import print from "./Print";
import report from "./Report";
import rows from "./Rows";
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
export type IconName =
  | "add"
  | "arrowDown"
  | "arrowUp"
  | "back"
  | "bell"
  | "boxAdd"
  | "calculator"
  | "calendar"
  | "caretDown"
  | "checkmark"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "circle"
  | "circleCheck"
  | "circlePlus"
  | "circlePlusInverted"
  | "circleRemove"
  | "close"
  | "columns"
  | "controlPanel"
  | "dashboard"
  | "eye"
  | "filter"
  | "forward"
  | "laptop"
  | "list"
  | "print"
  | "report"
  | "rows"
  | "sales"
  | "save"
  | "scales"
  | "search"
  | "shipping"
  | "tagDollar"
  | "trash"
  | "triangle"
  | "tripleDotsVertical"
  | "userGroup"
  | "user";

type TIconMap = { [key in IconName]: (props: IProps) => JSX.Element };
const icons: TIconMap = {
  add,
  arrowDown,
  arrowUp,
  bell,
  back,
  boxAdd,
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
  filter,
  forward,
  laptop,
  list,
  print,
  report,
  rows,
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
export const iconNames = Object.keys(icons) as IconName[];
