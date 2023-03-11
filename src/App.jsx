import "./App.css";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import { MyRoutes } from "./routers/routes";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./styles/Themes";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import {UserAuth} from "./context/AuthContext"
export const ThemeContext = createContext(null);
function App() {
const {user} = UserAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "active" : ""}>
             {
              user?.uid?  ( <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />):null
             }
               
             

              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  min-height:100vh;
  color: ${({theme})=>theme.text};
  &.active {
    grid-template-columns: 220px 1fr;
  }
`;
export default App;
