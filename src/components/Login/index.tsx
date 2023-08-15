import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../../api/api";
import { GrLogin } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iFormDataLogin {
  username: string;
  password: string;
}

const FormLogin = () => {
  const schema = yup.object().shape({
    username: yup.string().required("O nome de usuário é obrigatório."),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormDataLogin>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmitLogin = async (data: iFormDataLogin) => {
    try {
      const response = await api.post("/users/login/", data);
      localStorage.setItem("token", response.data.access);
      const nameStringToObject = JSON.parse(response.config.data);
      localStorage.setItem("name", nameStringToObject.username);
      notifySuccess("Entrando...");
      setTimeout(() => {
        navigate("/shop");
      }, 3000);
    } catch (error) {
      notifyError("Nome ou senha incorretos");
      console.log(error);
    }
  };

  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmitLogin)}>
      <div className="divInput">
        <span>{<GrLogin />}</span>
        <input
          placeholder="Digite seu username"
          type="text"
          {...register("username")}
        />
      </div>
      {errors.username && (
        <span className="error">{errors.username.message}</span>
      )}
      <div className="divInput">
        <span>{<RiLockPasswordFill />}</span>
        <input
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
      </div>
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button className="submitButton" type="submit">
        Entrar
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </form>
  );
};

export default FormLogin;
