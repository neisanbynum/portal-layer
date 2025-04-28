import { createPortal } from "react-dom"
import usePortalLayer from "./context"
import { PortalProperties } from "./types"

const Portal: React.FC<PortalProperties> = ({ children, style, ...rest }) => {
	const node = usePortalLayer()

	return createPortal(<div {...rest} style={{...style, pointerEvents: 'none'}} >{children}</div>, node)
}
Portal.displayName = 'Portal'

export default Portal