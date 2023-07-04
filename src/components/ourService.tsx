"use client";
import { AnimatePresence, Transition, Variants, motion } from "framer-motion";
import OurServiceItem from "./ourServiceItem";
import { ourServicesItems, ourServiceListText } from "@/lib/helperObj";
import { useState } from "react";
import ScrollPullAnimated from "./scrollPullAnimated";

const OurService = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const isActiveIndex = (indexItem: number) =>
    currentItem === indexItem ? "bg-primary isActive" : "";

  const selecActiveListhandler = (e: any) => {
    const liElem = e.target.closest(".services-items");

    if (liElem) setCurrentItem(+liElem.dataset.listnum);
  };
  return (
    <section className="container mx-auto w-5/6">
      <ScrollPullAnimated offscreenY={300} onscreenY={0}>
        <header className="text-center font-bold my-3">
          <h3 className="text-primary mb-3">our services</h3>
          <h1 className="text-3xl mb-3">Explore Our Services</h1>
        </header>
      </ScrollPullAnimated>
      <div className="grid lg:grid-cols-[20rem,_1fr] gap-6">
        <ul className="select-list">
          {ourServiceListText.map((el, index) => (
            <li
              key={el.id}
              data-listnum={index}
              onClick={selecActiveListhandler}
              className={`${isActiveIndex(
                index
              )} services-items my-3 flex items-center cursor-pointer text-2xl bg-light-gray p-3 font-bold hover:bg-primary transition duration-200`}
            >
              {el.icon}
              <span>{el.text}</span>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          <motion.div
            key={currentItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <OurServiceItem
              title={ourServicesItems[currentItem].title}
              imgSrc={ourServicesItems[currentItem].imgSrc}
              listTitles={ourServicesItems[currentItem].listTitles}
              paragraph={ourServicesItems[currentItem].paragraph}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurService;
