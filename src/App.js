import News from "./components/News/News";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <main style={{ paddingLeft: '400px' }}>

        <News />
      </main>
    </>
  );
}

export default App;
