import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
import { StyledUserPage } from "./styled";

const ListProducts = () => {
  const { updateList, products } = useContext(ProductContext);

  useEffect(() => {
    updateList();
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez

  return (
    <StyledUserPage>
      <h1>Listagem de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>Produto:{product.name}</h4>
            <span>Preço: {product.price}$</span>
            <p>Descrição: {product.description}</p>
          </li>
        ))}
      </ul>
    </StyledUserPage>
  );
};

export default ListProducts;
