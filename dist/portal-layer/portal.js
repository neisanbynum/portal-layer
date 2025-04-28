var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import usePortalLayer from "./context";
const Portal = (_a) => {
    var { children, style } = _a, rest = __rest(_a, ["children", "style"]);
    const node = usePortalLayer();
    return createPortal(_jsx("div", Object.assign({}, rest, { style: Object.assign(Object.assign({}, style), { pointerEvents: 'none' }), children: children })), node);
};
Portal.displayName = 'Portal';
export default Portal;
