import { useContext, useEffect } from "react";
import { StyledPosts } from "./style";
import { DashContext } from "../../context/DashContext";
import { Button } from "../Button";
import PostCard from "./postCard";
import EmptyCard from "./emptyCard";

const PostsList = ({
	titleList,
	actualId,
	name,
	style,
	size,
	click,
	emptyMessage,
}) => {
	const { postList, loadPosts } = useContext(DashContext);

	useEffect(() => {
		loadPosts(actualId);
	}, []);

	if (!postList) return null;

	if (postList.length !== 0) {
		return (
			<StyledPosts>
				<h3>{titleList.toUpperCase()}</h3>
				<ul>
					{postList.map(({ title, description, id, image }) => {
						return (
							<PostCard
								title={title}
								description={description}
								image={image}
								key={id}
							>
								<Button
									name={name}
									style={style}
									size={size}
									click={click}
									idPost={id}
								/>
							</PostCard>
						);
					})}
				</ul>
			</StyledPosts>
		);
	} else {
		return <EmptyCard emptyMessage={emptyMessage} />;
	}
};

export default PostsList;
