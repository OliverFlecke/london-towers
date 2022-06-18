import React from "react";
import useWindowSize from "../useWindowSize";
import type { Tower } from "./Tower";
import TowerPin from "./TowerPin";

const ratio = 189 / 79;

const Towers: React.FC<{ towers: Tower[] }> = ({ towers }) => {
  const windowSize = useWindowSize();
  if (windowSize.width === undefined) {
    return null;
  }

  const height = windowSize.width / ratio;

  return (
    <div
      className="absolute top-0 left-0 z-10 w-full"
      style={{
        height,
      }}
    >
      {towers.map((tower) => (
        <TowerPin key={tower.name} {...tower} />
      ))}
    </div>
  );
};

export default Towers;
