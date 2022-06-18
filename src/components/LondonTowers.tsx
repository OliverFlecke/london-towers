import dynamic from "next/dynamic";
import React from "react";
import type { Tower } from "./Tower";
import Towers from "./Towers";
import View from "./View";

const LondonTowers: React.FC<{ towers: Tower[] }> = ({ towers }) => {
  return (
    <>
      <View />

      <Client>
        <Towers towers={towers} />
      </Client>
    </>
  );
};

export default LondonTowers;

function Client({ children }: { children: any }) {
  const Dynamic = dynamic(async () => () => children, { ssr: false });

  return <Dynamic></Dynamic>;
}
