import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
text-align: center;
  h2 {
    width: fit-content;
    margin: auto;
  }
`;
const ThirdPagePartContext = styled.div`
  overflow: hidden;
  text-align: center;
  text-align: left;
  margin-top: 20px;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    color: #534d4d;
    font-size: 14px;
  }
  h4 {
    font-weight: 600;
  }
`;
const ThirdPagePartMini = styled.div`
  hr {
    width: 195px;
    margin: 50px auto 0;
    background: #292929;
    border: 0;
    height: 2px;
    border-radius: 50px;
  }
`;
const ThirdPagePartCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 20px;
  div {
    text-align: center;
    font-size: 27px;
  }
  .special {
    position: relative;
    font-weight: bold;
    &::after {
      content: "";
      width: 94px;
      height: 60px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("/heart.webp");
      background-size: cover;
      z-index: -1;
    }
  }
`;

export {
  ThirdPagePart,
  ThirdPagePartContext,
  ThirdPagePartMini,
  ThirdPagePartCalendar,
};
