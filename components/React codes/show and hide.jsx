import { useState } from "react";

function Property() {
	const [show,setShow] = useState(false);

 	let buttonText = show ? "Hide Component" : "Show Component";

	function showElement() {
		setShow(!show)
	}

return (
	<div>
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
