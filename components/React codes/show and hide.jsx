import { useState } from "react";
import style from "./styles.module.scss";

function Property() {
	const [show,setShow] = useState(false);
	const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

 	let buttonText = show ? "Hide Component" : "Show Component";

	function showElement() {
		setShow(!show)
	}

return (
	<div className={`${style.root} ${isHeaderFixed ? style.sticky : ''}`}>
    	<button onClick={showElement}>{buttonText}</button>
		{show && (
			<div>
				<p>sdbvsdb</p>
				<p>dsdsb</p>
			</div>
		)}
	</div>
   )
}
export default Property;
