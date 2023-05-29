import { StyledEmptyCard } from "./style";
import { TfiFaceSad } from "react-icons/tfi";

const EmptyCard = ({ emptyMessage }) => {
	if (emptyMessage == null) {
		return;
	} else {
		return (
			<StyledEmptyCard>
				<h3>
					{emptyMessage} <TfiFaceSad />
				</h3>
			</StyledEmptyCard>
		);
	}
};

export default EmptyCard;
