import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

import LoginPage from './pages/LoginPage';

export const ThemeContext = React.createContext(null);

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    window.location.reload();
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;


    const token = getToken();

    if (!token) {
        console.log(token)
        return <LoginPage setToken={setToken} />
    }
    else{

        return (
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <GlobalStyle />
                    <Helmet>
                        <title>Dashboard</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                            rel="stylesheet"
                        />
                    </Helmet>
                    <>
                        <Layout>
                            <Routes />
                        </Layout>
                    </>
                </ThemeProvider>
            </ThemeContext.Provider>
        );
    }
};

export default App;
