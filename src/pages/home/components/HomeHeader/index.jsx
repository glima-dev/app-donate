import React from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { StyledHomeHeader } from "./style";

const HomeHeader = () => {
	const { users, donation } = React.useContext(AuthContext);

	const totalGoal = users.reduce(
		(acc, actualValue) => acc + +actualValue.goal,
		0
	);
	const totalRaised = donation?.reduce(
		(acc, actualValue) => acc + +actualValue.raised,
		0
	);

	return (
		<StyledHomeHeader>
			<div className="heroSection">
				<p>NOS AJUDE A FAZER MAIS</p>
				<h1>DOE AGORA</h1>
			</div>

			<div className="statsSection">
				<div className="statsItem">
					<h2>Nossa Meta:</h2>
					<h3>${totalGoal?.toLocaleString()}</h3>
				</div>
				<div className="statsItem">
					<h2>Arrecadados:</h2>
					<h3>${totalRaised?.toLocaleString()}</h3>
				</div>
				<div className="statsItem">
					<h2>ONGs Cadastradas:</h2>
					<h3>{users?.length}</h3>
				</div>
			</div>
		</StyledHomeHeader>
	);
};

export default HomeHeader;
