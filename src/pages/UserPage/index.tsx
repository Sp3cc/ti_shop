import { useNavigate } from "react-router-dom";
import CreateProductPage from "../CreateProductsPage";
import ListProducts from "../../components/listProducts/listProducts";
import { StyledUserPage } from "./styled";
import { GrCloudComputer } from "react-icons/gr";
import Footer from "../../components/footer";

const UserPage = () => {
  const navigate = useNavigate();
  const LogoutFunction = () => {
    localStorage.clear();
    navigate("/");
  };
  const name = localStorage.getItem("name");
  return (
    <StyledUserPage>
      <header>
        <div>
          <GrCloudComputer />
          <h1>PAGINA DO USUÁRIO</h1>
        </div>
        <div>
          <p>Bem vindo {name}</p>
          <button className="buttonLogout" onClick={LogoutFunction}>
            Logout
          </button>
        </div>
      </header>
      <div className="divContainer">
        <CreateProductPage />
        <ListProducts />
      </div>
      <Footer />
    </StyledUserPage>
  );
};

export default UserPage;
