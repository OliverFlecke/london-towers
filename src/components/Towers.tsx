import React from "react";
import useWindowSize from "../useWindowSize";
import { towers } from "./Tower";
import TowerPin from "./TowerPin";

const ratio = 189 / 79;

const Towers: React.FC = () => {
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
