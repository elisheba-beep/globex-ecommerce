import React from "react";

import styles from "./GlobexTestimonials.module.scss";
import GlobexTestimonialCard from "./GlobexTestimonialCard/GlobexTestimonialCard";

const GlobexTestimonials = () => {
  return (
    <div className={styles.container}>
      <GlobexTestimonialCard
        userImage="/image-four.png"
        rating="4.4"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper "
      />
      <GlobexTestimonialCard
        userImage="/image-four.png"
        rating="4.4"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper "
      />
      <GlobexTestimonialCard
        userImage="/image-four.png"
        rating="4.4"
        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper "
      />
    </div>
  );
};

export default GlobexTestimonials;
