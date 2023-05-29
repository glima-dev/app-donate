import { StyledCard } from "./style";

const PostCard = ({ title, description, image, children }) => {
	return (
		<StyledCard>
			<img src={image} alt="" />
			<h2>{title.toUpperCase()}</h2>
			<p>{description}</p>
			{children}
		</StyledCard>
	);
};
export default PostCard;
