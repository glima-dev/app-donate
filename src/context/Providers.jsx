import { AuthProvider } from "./AuthContext";
import { DashProvider } from "./DashContext";

export const Providers = ({ children }) => {
	return (
		<DashProvider>
			<AuthProvider>{children}</AuthProvider>
		</DashProvider>
	);
};
