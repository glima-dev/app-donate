import { useContext } from "react";
import { DashContext } from "../../../../context/DashContext";
import { StyledModalBackgroud, StyledModalDiv } from "./style";

const ProfilePostModal = () => {
	const { setModalPost, postList, idProfilePost } = useContext(DashContext);

	const actualPost = postList.find((post) => post.id === idProfilePost);

	return (
		<StyledModalBackgroud>
			<StyledModalDiv>
				<button
					onClick={() => {
						setModalPost(false);
					}}
				>
					X
				</button>
				<img src={actualPost.image} />
				<section>
					<h2>{actualPost.title.toUpperCase()}</h2>
					<p>{actualPost.description}</p>
				</section>
			</StyledModalDiv>
		</StyledModalBackgroud>
	);
};
export default ProfilePostModal;
