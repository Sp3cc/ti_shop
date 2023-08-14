import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../api/api";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iFormDataProducts {
  name: string;
  price: string;
  description: string;
}

const CreateProducts = () => {
  const { updateList } = useContext(ProductContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormDataProducts>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data: iFormDataProducts) => {
    try {
      const response = await api.post("/products/", data);
      notifySuccess("Produto criado com sucesso!");
      updateList();
      console.log(response.data);
    } catch (error) {
      notifyError("Algo deu errado.");
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
    <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
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
      <input type="text" placeholder="Nome do produto" {...register("name")} />
      {errors.name && <span className="error">{errors.name.message}</span>}
      <input
        type="text"
        placeholder="Valor do produto"
        {...register("price")}
      />
      {errors.price && <span className="error">{errors.price.message}</span>}
      <input
        type="text"
        placeholder="Descrição do produto"
        {...register("description")}
      />
      {errors.description && (
        <span className="error">{errors.description.message}</span>
      )}

      <button className="buttonSubmit">Criar</button>
    </form>
  );
};

export default CreateProducts;
