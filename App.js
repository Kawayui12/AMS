import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthenticationContextProvider } from "./src/authentication/Context";
import Account from "./src/navigation/Account";
import Dashboard from "./src/navigation/Dashboard";

export default function App() {
  console.log(AuthenticationContextProvider.isLoading);
  // const {isLoading} = useContext(AuthenticationContextProvider)
  return (
    <AuthenticationContextProvider>
      <NavigationContainer>
        {true  ? <Dashboard /> : <Account />}
      </NavigationContainer>
    </AuthenticationContextProvider>
  );
}