import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";

export const MusicPage = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
      setManualPlay(true);
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (manualPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setManualPlay(!manualPlay);
  };

  return (
    <MusicPagePart onClick={handleClick}>
      <img loading="lazy" src={Music} alt="music" />
      <audio ref={audioRef} src={Song} loop />
      {/* {showTip && (
        <div
          onClick={handleClick}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          Սեղմեք այստեղ
        </div>
      )} */}
    </MusicPagePart>
  );
};
