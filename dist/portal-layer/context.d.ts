import React from "react";
export declare const PortalLayerContext: React.Context<HTMLDivElement | null>;
export type PortalLayerValues = NonNullable<React.ContextType<typeof PortalLayerContext>>;
declare const usePortalLayer: () => HTMLDivElement;
export default usePortalLayer;
