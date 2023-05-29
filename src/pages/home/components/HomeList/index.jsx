import React from "react";
import { Link } from "react-router-dom";
import AnimatedBanner from "../../../../components/AnimatedBanner";
import { AuthContext } from "../../../../context/AuthContext";
import { StyledHomeList, StyledHomeCard } from "./style";

const HomeList = () => {
	const { users, donation } = React.useContext(AuthContext);

	const calculatePercentage = (raised, goal) => {
		const result = (raised / goal) * 100;
		return result >= 100 ? 100 : Math.floor(result);
	};

	const findRaised = (id) => {
		const user = donation.filter(
			(user) => user.userId === id || user.userId === id.toLocaleString()
		);
		const totalRaised = user.reduce(
			(acc, actValue) => acc + +actValue.raised,
			0
		);
		return totalRaised ? totalRaised : 0;
	};

	return (
		<>
			<StyledHomeList>
				<h1>ESCOLHA SUA CAUSA</h1>
				<ul>
					{users.map(({ name, id, description, image, goal }) => {
						return (
							<StyledHomeCard as={Link} to={`/profile/${id}`} key={id}>
								<li className="card">
									<div className="cardHeader">
										<img src={image} alt={name} />
										<span className="cta">MAIS SOBRE</span>
									</div>
									<div className="cardBody">
										<h2>{name}</h2>
										<p>{description}</p>
									</div>
									<div className="cardFooter">
										<span className="percentage">
											{calculatePercentage(findRaised(id), goal)}%
											<span
												className="barColor"
												style={{
													width: `${calculatePercentage(
														findRaised(id),
														goal
													)}%`,
												}}
											/>
											<span className="barGrey" />
										</span>
										<div className="stats">
											<span>
												Arrecadados: ${findRaised(id)?.toLocaleString()}
											</span>
											<span>Meta: ${(+goal)?.toLocaleString()}</span>
										</div>
									</div>
								</li>
							</StyledHomeCard>
						);
					})}
				</ul>
			</StyledHomeList>
			<AnimatedBanner />
		</>
	);
};

export default HomeList;
