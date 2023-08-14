import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/Login/index";
import Footer from "../../components/footer";
import { StyledLoginPage } from "./style";
import SideSection from "../../components/section";

const LoginPage = () => {
  const navigate = useNavigate();
  const HandleNavigateToRegister = () => {
    navigate("/register");
  };
  return (
    <StyledLoginPage>
      <section className="firstSection">
        <div>
          <h1>Entre com sua conta!</h1>
        </div>
        <FormLogin />
      </section>

      <SideSection
        text="Não criou sua conta ainda?"
        aux="clique no botão abaixo para se cadastar e fique por dentro de todas as promoções!"
        onClickFunction={HandleNavigateToRegister}
        contentButton="Cadastre-se"
      />

      <Footer />
    </StyledLoginPage>
  );
};

export default LoginPage;
