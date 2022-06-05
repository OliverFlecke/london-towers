import { Tower } from "./Tower";
import Image from "next/image";

const TowerPin: React.FC<Tower> = (props) => {
  const { name, position, link, lineHeight, height } = props;

  return (
    <div
      className="tower-container group flex flex-col-reverse items-center"
      style={{
        left: `${position}%`,
        bottom: `${100 - height}%`,
        transform: "translate(-50%, 0)",
      }}
    >
      <TowerLine height={lineHeight} />
      <TowerPinContent {...props} />
    </div>
  );
};

export default TowerPin;

const TowerLine: React.FC<{ height: number }> = ({ height }) => (
  <div
    className="tower-line opacity-50 group-hover:opacity-100"
    style={{
      transform: "translate(-50%, 0)",
      height: height,
      bottom: 0,
    }}
  ></div>
);

const TowerPinContent: React.FC<Tower> = ({ link, name, image }) => (
  <a
    href={link}
    className="tower-pin border-red-900 border-opacity-50 group-hover:border-opacity-100"
  >
    <span className="absolute z-10 text-center leading-tight opacity-0 group-hover:opacity-100">
      {name}
    </span>
    {image && (
      <Image
        className="opacity-100 group-hover:opacity-100"
        src={`/images/buildings/${image}`}
        alt={name}
        width={100}
        height={100}
      />
    )}
  </a>
);
