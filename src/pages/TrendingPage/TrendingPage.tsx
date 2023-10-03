import React from "react";
import { ComponentCards } from "../HomePage/ComponentTitle/ComponentCards/ComponentCards";
import { ComingSoonCards } from "../../utils/DummyData";

export const TrendingPage = () => {
  return (
    <div className="bg-gradient-to-r from-violet-950 to-black h-[100vh] p-[50px]">
      <div className="CardHeadingFont">Favorites</div>
      <div>
        <ComponentCards Cards={ComingSoonCards} CardWidth="275px" />
      </div>
    </div>
  );
};
