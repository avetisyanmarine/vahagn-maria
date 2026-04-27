import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";
import Photof2 from "../../assets/image/photof2.jpg";
import Photof3 from "../../assets/image/photof3.jpg";
import Bant from "../../assets/image/bant.png";
import LineAes from "../../assets/image/lineaes.png";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <img src={Photof2} className="rounded-[15px]" alt="" />
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Երրորդություն եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/v8pxPrzxB87LT6mB9"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Հրաշք Այգի Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/35zzYY99W9wpDqpM7"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
          հարմարավետ կոշիկներ` պարելու համար:
          <br />
          <br />
          Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
          իրենց բալիկների նկատմամբ:
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <img src={Photof3} className="rounded-[15px] mb-10" alt="" />
      </Container>
    </ForthPagePart>
  );
};
