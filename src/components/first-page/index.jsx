import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale-70" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="mt-3 text-[#ffff] maintext"
            style={{ textShadow: "5px 7px 9px #000" }}
          >
            <h4>Հարսանյաց Հրավեր</h4>
            <div data-aos="fade-up" className="text-center absolute bottom-33">
              <h3>Վահագն և Մարիա</h3>
              <h4 style={{fontSize: "30px"}}>12.07.2026</h4>
            </div>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
