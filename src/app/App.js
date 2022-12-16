import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Employees from "../pages/employees/Employees";
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
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div
        style={{
          paddingLeft: "320px",
          width: "100%",
        }}
      >
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
