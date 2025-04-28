import React from "react"

// For Portal Layer
export type PortalLayerProperties = {
	children?: React.ReactNode
	id?: string
}

// For Portal
export type PortalProperties = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>