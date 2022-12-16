import { createTheme, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
  },
});

function App() {
  return (
    <>
      <SideMenu />
      <div
        style={{
          paddingLeft: "320px",
          width: "100%",
        }}
      >
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
