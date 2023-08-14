import { StyledSection } from "./styled";
import { GrCloudComputer } from "react-icons/gr";

interface SectionProps {
  text: string;
  aux: string;
  onClickFunction: React.MouseEventHandler<
    HTMLButtonElement | HTMLHeadingElement
  >;
  contentButton: string;
}

const SideSection = ({
  text,
  aux,
  onClickFunction,
  contentButton,
}: SectionProps) => {
  return (
    <StyledSection>
      <GrCloudComputer />
      <h2>{text}</h2>
      <p>{aux}</p>
      <button type="submit" onClick={onClickFunction}>
        {contentButton}
      </button>
    </StyledSection>
  );
};

export default SideSection;
