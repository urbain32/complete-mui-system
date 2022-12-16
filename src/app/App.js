import { PeopleOutlineTwoTone } from "@mui/icons-material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
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
        <PageHeader
          title="Page Header"
          subtitle="Page  description"
          icon={<PeopleOutlineTwoTone />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
