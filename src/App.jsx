import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import {Outlet} from "react-router-dom";

const App = () => {

  return (
    <>
      <Header />
        <div className="main">
          <Outlet />
        </div>
      <Footer />
    </>
  );
};

export default App;
