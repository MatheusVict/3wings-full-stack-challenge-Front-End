import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const MenuItems = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    {
      name: "Entrar em contato",
      href: "mailto:matheusvictorhenrique@gmail.com",
    },
  ];
  return (
    <div className="App">
      <Header navItems={MenuItems} />
      <div
        className="        
        w-100
        d-flex
        flex-column
        justify-content-center
        mt-5
      "
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
