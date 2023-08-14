// import { CreateProducts } from "../../components/createProducts/createProducts";

import CreateProducts from "../../components/createProducts/createProducts";
import { StyledCreateProduct } from "./styled";

const CreateProductPage = () => {
  return (
    <StyledCreateProduct>
      <h1>Criar produto</h1>
      <CreateProducts />
    </StyledCreateProduct>
  );
};

export default CreateProductPage;
