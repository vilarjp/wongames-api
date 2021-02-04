import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Mantido por{" "}
        <a
          key="website"
          href="https://www.linkedin.com/in/joao-paulo-vilar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          João Paulo Vilar
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
