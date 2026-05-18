import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";
import { TextShadow } from "../TextShadow";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <TextShadow title="Ժամանակացույց" />
        <ThirdPagePartContext>
          <ThirdPageBlock
            // imageSize={80}
            number={"11:00"}
            smallText="Զովունի 13 փողոց, 24/1"
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            className="20px"
            // uniqueMargin={50}
            // imageSize={80}
            smallText="Զովունի 12 փողոց"
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            // uniqueMargin={50}
            imageSize={80}
            number={"15:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Հովհաննավանք"
          />
          <ThirdPageBlock
            // imageSize={80}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Աղաբաբյանս Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
