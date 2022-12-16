import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./App.css";

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
    </>
  );
}

export default App;
