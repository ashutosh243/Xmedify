import React from "react";
import FaqLeft from "./FaqLeft";
import FaqRight from "./FaqRight";

const Faq = () => {
  return (
    <section className="py-16 bg-[#F9FBFF]">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center w-[80vw]">
        <FaqLeft />
        <FaqRight />
      </div>
    </section>
  );
};

export default Faq;
