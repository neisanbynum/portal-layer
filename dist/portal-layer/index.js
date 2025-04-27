import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { PortalLayerContext } from "./context";
const PortalLayer = ({ children, id = 'portal-root' }) => {
    const currID = React.useRef('');
    const [node, setNode] = React.useState(null);
    React.useEffect(() => {
        if (currID.current !== id) {
            const curr = window.document.getElementById(currID.current);
            if (curr && curr.parentNode)
                curr.parentNode.removeChild(curr);
        }
        let root = document.getElementById(id);
        if (!root) {
            root = document.createElement('div');
            root.id = id;
            root.style.position = 'fixed';
            root.style.top = '0';
            root.style.left = '0';
            root.style.width = '100vw';
            root.style.height = '100vh';
            root.style.pointerEvents = 'none';
            root.style.overflow = 'hidden';
            document.body.appendChild(root);
        }
        setNode(root);
        currID.current = id;
        return () => {
            if (root.parentNode)
                root.parentNode.removeChild(root);
        };
    }, [id]);
    if (!node)
        return null;
    return _jsx(PortalLayerContext.Provider, { value: node, children: children });
};
PortalLayer.displayName = 'PortalLayer';
export default PortalLayer;
