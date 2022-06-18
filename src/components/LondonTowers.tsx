import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Tower } from "./Tower";
import Towers from "./Towers";
import View from "./View";

const LondonTowers: React.FC = ({}) => {
  return (
    <>
      <View />

      <Client>
        <Helper />
      </Client>
    </>
  );
};

export default LondonTowers;

function Client({ children }: { children: any }) {
  const Dynamic = dynamic(async () => () => children, { ssr: false });

  return <Dynamic></Dynamic>;
}

const Helper: React.FC = () => {
  const [towers, setTowers] = useState<Tower[]>([]);
  useEffect(() => {
    fetch("/api/towers")
      .then(async (x) => await x.json())
      .then(setTowers);
  }, []);

  return <Towers towers={towers} />;
};
