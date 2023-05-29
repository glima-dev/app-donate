import { useContext } from "react";
import { DashContext } from "../../../../context/DashContext";
import { StyledDashboardHeader } from "./style";

const DashboardHeader = () => {
	const { currentUser } = useContext(DashContext);

	return (
		<StyledDashboardHeader>
			<div>
				<h1>{currentUser?.name.toUpperCase()}</h1>
			</div>
		</StyledDashboardHeader>
	);
};

export default DashboardHeader;
