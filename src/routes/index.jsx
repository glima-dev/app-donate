import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard";
import HomePage from "../pages/home";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Register from "../pages/register";
import AsideMenu from "../components/AsideMenu";
import Header from "../components/Header";
import { Container } from "../styles/container";
import ScrollToTop from "./scrollToTop";
import ProtectedRoute from "./protectedRoute";

export const RoutesMain = () => {
	return (
		<>
			<ScrollToTop />
			<Container>
				<AsideMenu />
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<DashBoard />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<HomePage />} />
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Container>
		</>
	);
};
