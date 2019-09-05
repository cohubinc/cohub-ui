import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { toMatchImageSnapshot } from "jest-image-snapshot";

// Imports customer matchers - Customer matcher api docs are here -> https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

expect.extend({ toMatchImageSnapshot });

Enzyme.configure({ adapter: new Adapter() });

Element.prototype.scrollIntoView = () => null;
