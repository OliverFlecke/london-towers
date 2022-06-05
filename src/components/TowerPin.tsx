import { Tower } from "./Tower";

const TowerPin: React.FC<Tower> = ({
  name,
  position,
  link,
  lineHeight,
  height,
}) => {
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
      <TowerPinContent name={name} link={link} />
    </div>
  );
};

export default TowerPin;

const TowerLine: React.FC<{ height: number }> = ({ height }) => (
  <div
    className="tower-line w-0"
    style={{
      transform: "translate(-50%, 0)",
      height: height,
      bottom: 0,
    }}
  ></div>
);

const TowerPinContent: React.FC<{ link: string; name: string }> = ({
  link,
  name,
}) => (
  <a href={link} className="tower-pin opacity-50 group-hover:opacity-100">
    <span className="text-center leading-tight group-hover:opacity-100">
      {name}
    </span>
  </a>
);
