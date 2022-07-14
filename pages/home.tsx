import React from "react";
import GlobexCard from "../components/elements/GlobexCard/GlobexCard";
import GlobexDiscount from "../components/elements/GlobexDiscount/GlobexDiscount";
import GlobexServices from "../components/elements/GlobexServices/GlobexServices";
import GlobexCTA from "../components/sectionComponents/GlobexCTA/GlobexCTA";
import GlobexGrid from "../components/sectionComponents/GlobexGrid/GlobexGrid";
import GlobexTestimonials from "../components/sectionComponents/GlobexTestimonials/GlobexTestimonials";

const home = () => {
  return (
    <div>
      <GlobexDiscount />
      <GlobexCTA
        left="/image-four.png"
        right="/image-four.png"
        heading="PRADA"
        variant="white"
        type="full"
        color="#FFFFFF"
      />
      <GlobexGrid
        imageOne="/image-four.png"
        imageTwo="/image-four.png"
        imageThree="/image-four.png"
        imageFour="/image-four.png"
        imageFive="/image-four.png"
        imageSix="/image-four.png"
        grid="random"
      />
      <GlobexGrid grid="4col">
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexCard
          src="/image-four.png"
          width={400}
          height={300}
          display="block"
        >
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
      </GlobexGrid>
      <GlobexTestimonials/>
      <GlobexServices/>
    </div>
  );
};

export default home;
