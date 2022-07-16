import React from "react";
import GlobexCard from "../components/elements/GlobexCard/GlobexCard";
import GlobexDiscount from "../components/elements/GlobexDiscount/GlobexDiscount";
import GlobexEmail from "../components/elements/GlobexEmail/GlobexEmail";
import GlobexServices from "../components/elements/GlobexServices/GlobexServices";
import GlobexAppBar from "../components/layouts/GlobexAppBar/GlobexAppBar";
import GlobexFooter from "../components/layouts/GlobexFooter/GlobexFooter";
import GlobexCTA from "../components/sectionComponents/GlobexCTA/GlobexCTA";
import GlobexGrid from "../components/sectionComponents/GlobexGrid/GlobexGrid";
import GlobexTestimonials from "../components/sectionComponents/GlobexTestimonials/GlobexTestimonials";

const home = () => {
  return (
    <div>
      <GlobexAppBar/>
      <GlobexDiscount />
      <GlobexCTA
        left="/image-four.png"
        right="/image-four.png"
        heading="PRADA"
        variant="white"
        type="half"
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
      <GlobexEmail/>
      <GlobexFooter/>
    </div>
  );
};

export default home;
