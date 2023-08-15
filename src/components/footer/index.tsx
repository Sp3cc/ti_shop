import { StyledFooter } from "./styled";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const redirectToSocialMedia = (url: string) => {
    window.open(url, "_blank"); // Abre a URL em uma nova aba
  };

  return (
    <StyledFooter>
      <ul>
        <li
          onClick={() => redirectToSocialMedia("https://www.facebook.com/zuck")}
        >
          <AiOutlineFacebook />
        </li>
        <li
          onClick={() =>
            redirectToSocialMedia("https://www.instagram.com/dsasoftwares/")
          }
        >
          <BsInstagram />
        </li>
        <li onClick={() => redirectToSocialMedia("https://wa.me/558296190973")}>
          <BsWhatsapp />
        </li>
      </ul>
      <span>Developed by: Rhyan Oliveira</span>
    </StyledFooter>
  );
};

export default Footer;
