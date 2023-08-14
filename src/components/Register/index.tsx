import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { HiOutlineMail } from "react-icons/hi";
import { GrLogin } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

interface iFormData {
  username: string;
  email: string;
  password: string;
  // confirmPassword: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Digite seu username"),
  email: yup.string().required("Digite seu email").email("email inválido"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
  // confirmPassword: yup
  //   .string()
  //   .required("Confirme sua senha")
  //   .oneOf([yup.ref("password")], "As senhas não conferem"),
});

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmitFunction = async (data: iFormData) => {
    const data1 = data;

    try {
      const response = await api.post("/users/", data1);
      console.log(response);
      notifySuccess("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data.username[0]);
        console.log(error.response?.data.username[0]);
      } else {
        console.log(error);
      }
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
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="divInput">
        <span>
          <GrLogin />
        </span>
        <input
          placeholder="digite seu nome"
          type="text"
          {...register("username")}
        />
      </div>
      {errors.username && (
        <span className="error">{errors.username.message}</span>
      )}
      <div className="divInput">
        <span>
          <HiOutlineMail />
        </span>
        <input
          placeholder="digite seu email"
          type="text"
          {...register("email")}
        />
      </div>

      {errors.email && <span className="error">{errors.email.message}</span>}
      <div className="divInput">
        <span>
          <RiLockPasswordFill />
        </span>
        <input
          placeholder="digite sua senha"
          type="password"
          {...register("password")}
        />
      </div>

      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button className="submitButton">Cadastrar</button>
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
    </form>
  );
};

export default FormRegister;
