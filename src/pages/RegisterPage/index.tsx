import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/Register";
import SideSection from "../../components/section";
import { StyledRegisterPage } from "./style";
import Footer from "../../components/footer";

const RegisterPage = () => {
  const navigate = useNavigate();

  const MoveToLogin = () => {
    navigate("/");
  };

  return (
    <StyledRegisterPage>
      <section className="firstSection">
        <h1>Crie sua conta!</h1>
        <FormRegister />
      </section>
      <SideSection
        text="Já possui uma conta?"
        aux="clique aqui para entrar!"
        onClickFunction={MoveToLogin}
        contentButton="Login"
      />
      <Footer />
    </StyledRegisterPage>
  );
};

export default RegisterPage;
