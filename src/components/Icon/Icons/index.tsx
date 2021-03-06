import add from "./Add";
import arrowDown from "./ArrowDown";
import archive from "./Archive";
import arrowUp from "./ArrowUp";
import asterisk from "./Asterisk";
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
import edit from "./Edit";
import error from "./Error";
import eye from "./Eye";
import filter from "./Filter";
import forward from "./Forward";
import help from "./Help";
import importExport from "./ImportExport";
import info from "./Info";
import itemShapes from "./ItemShapes";
import laptop from "./Laptop";
import list from "./List";
import location from "./Location";
import print from "./Print";
import report from "./Report";
import rows from "./Rows";
import sales from "./Sales";
import save from "./Save";
import scales from "./Scales";
import search from "./Search";
import settings from "./Settings";
import shipping from "./Shipping";
import sync from "./Sync";
import tagDollar from "./TagDollar";
import trash from "./Trash";
import triangle from "./Triangle";
import tripleDotsVertical from "./TripleDotsVertical";
import userGroup from "./UserGroup";
import user from "./User";
import { IIconProps } from "../index";
export type TIconName =
  | "add"
  | "archive"
  | "arrowDown"
  | "arrowUp"
  | "asterisk"
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
  | "error"
  | "edit"
  | "eye"
  | "filter"
  | "forward"
  | "help"
  | "importExport"
  | "info"
  | "itemShapes"
  | "laptop"
  | "list"
  | "location"
  | "print"
  | "report"
  | "rows"
  | "sales"
  | "save"
  | "scales"
  | "search"
  | "settings"
  | "shipping"
  | "sync"
  | "tagDollar"
  | "trash"
  | "triangle"
  | "tripleDotsVertical"
  | "userGroup"
  | "user";

type TIconMap = { [key in TIconName]: (props: IIconProps) => JSX.Element };
const icons: TIconMap = {
  add,
  archive,
  arrowDown,
  arrowUp,
  asterisk,
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
  edit,
  error,
  eye,
  filter,
  forward,
  help,
  importExport,
  info,
  itemShapes,
  laptop,
  list,
  location,
  print,
  report,
  rows,
  sales,
  save,
  scales,
  search,
  settings,
  shipping,
  sync,
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
