import React from "react";
import { PortalContextValues } from "./types";

export const PortalLayerContext = React.createContext<PortalContextValues | null>(null)

const usePortalLayer = (): PortalContextValues => {
	const context = React.useContext(PortalLayerContext)
	if (!context) throw new Error('usePortalLayer must be used within a PortalLayerProvider')
	return context
}

export default usePortalLayer