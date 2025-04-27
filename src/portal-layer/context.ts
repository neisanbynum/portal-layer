import React from "react";

export const PortalLayerContext = React.createContext<HTMLDivElement | null>(null)
export type PortalLayerValues = NonNullable<React.ContextType<typeof PortalLayerContext>>

const usePortalLayer = () => {
	const context = React.useContext(PortalLayerContext)
	if (!context) throw new Error('usePortalLayer must be used within a PortalLayerProvider')
	return context
}

export default usePortalLayer