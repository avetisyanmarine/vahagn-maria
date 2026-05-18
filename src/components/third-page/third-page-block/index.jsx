import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartContext, ThirdPageBlockPartSvg } from "./styled";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  line,
  imageSize,
  className
}) => {
  return (
    <>
      <ThirdPageBlockPart
        style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "50px" }}
      >
          <h2 className="rotate-270 border-b">{number}</h2>
        {/* <ThirdPageBlockPartSvg line={line} className="flex"> */}
          {/* <div className="mb-2  w-[1.5px] h-22.5 bg-[#292929]"></div> */}
        {/* </ThirdPageBlockPartSvg> */}
        <ThirdPageBlockPartContext data-aos="fade-up">
          <h3>{bigText}</h3>
          <p>{smallText}</p>
        </ThirdPageBlockPartContext>
      </ThirdPageBlockPart>
    </>
  );
};
