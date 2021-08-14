import React, {useState} from "react";
import sidebarLinks from "./sidebarlinks";
import { Link } from "react-router-dom";

function Siderbar(props) {
	const [links, setLinks] = useState(sidebarLinks);
	const handleSelection = (id) => {
		let clone = [...links];
		
		let index = clone.findIndex((link) => link.id === id);

		clone.forEach((link) => {
			link["classes"] = [];
			link["classes"].push("sidebar-links");
		});
		clone[index]["classes"].push("active");
		setLinks(clone);
	};

	return (
		<div class="m-sidebar">
			{links.map((link) => (
				<Link
				 onClick = {() => handleSelection(link.id)}
				 to={`/dashboard${link.path}`}>
					<div key= {link.id} className={link.classes.join(" ")}>
					<h4>{link.icon}</h4>
					<h5>{link.label}</h5>
				</div>

				</Link>
			))}
		</div>
	);
}

export default Siderbar;