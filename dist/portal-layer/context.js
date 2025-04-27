import React from "react";
export const PortalLayerContext = React.createContext(null);
const usePortalLayer = () => {
    const context = React.useContext(PortalLayerContext);
    if (!context)
        throw new Error('usePortalLayer must be used within a PortalLayerProvider');
    return context;
};
export default usePortalLayer;
