import { useState } from "react";
export default function StateContainer(_a) {
    var initialState = _a.initialState, children = _a.children;
    var _b = useState(initialState), state = _b[0], setState = _b[1];
    return children({ state: state, setState: setState });
}
//# sourceMappingURL=StateContainer.js.map