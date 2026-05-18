import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import HeartLine from "../../assets/image/heartline.png";
import LineAes from "../../assets/image/lineaes.png";
import AttendanceGuests from "../AttendanceGuests";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Հովհաննավանք"}
            mapSrc={"https://maps.app.goo.gl/Fnqg4WkXTtxn5F8N7"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Աղաբաբյանս Ռեստորան"}
            mapSrc={"https://yandex.com/maps/org/79838143048/reviews/?ll=44.460219%2C40.209697&z=7"}
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
          Թույլ տանք, որ այդ օրը սպիտակ զգեստով լինի միայն հարսնացուն 🤍
          <br />
          Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
          իրենց բալիկների նկատմամբ:
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
