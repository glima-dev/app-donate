import { StyledDashboard } from "./style";
import { useContext, useEffect } from "react";
import { DashContext } from "../../context/DashContext";
import DashControlPanel from "./components/DashControlPanel";
import DashboardHeader from "./components/DashHeader";
import PostsList from "../../components/Posts";
import Modal from "../../components/Posts/postModal";
import Footer from "../home/components/HomeFooter";

const DashBoard = () => {
	const actualId = window.localStorage.getItem("@USER:ID");
	const { openModal, modal, getCurrentUser } = useContext(DashContext);

	useEffect(() => {
		getCurrentUser();
	}, []);

	return (
		<>
			{modal && <Modal />}
			<StyledDashboard>
				<DashboardHeader />
				<DashControlPanel />
				<PostsList
					titleList={"MINHAS POSTAGENS"}
					actualId={actualId}
					name={"DELETAR"}
					style={"brand1"}
					size={"default"}
					click={openModal}
					emptyMessage={`Infelizmente sua ONG não possui posts ainda`}
				/>
				<Footer />
			</StyledDashboard>
		</>
	);
};

export default DashBoard;
