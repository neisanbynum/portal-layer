import React from "react";
export type PortalLayerProperties = {
    children?: React.ReactNode;
    id?: string;
};
export type PortalContextValues = HTMLDivElement;
export type PortalProperties = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
