import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";
import HomeList from "./components/HomeList";
import { StyledHomePage } from "./style";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
	return (
		<StyledHomePage>
			<HomeHeader />
			<HomeList />
			<HomeContact />
			<Footer />
		</StyledHomePage>
	);
};

export default HomePage;
