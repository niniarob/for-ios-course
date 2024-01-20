import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./FullPageScroll.css";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className="fullpage-section bck-img-one same-style-bck-img">
          <div className="content">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              . რა არის iOS Human Interface Guidlines?
            </motion.h1>
            <div className="des-img">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="paragraph"
              >
                <p className="description">
                  * მოიცავს დიზაინის პრინციპებს და რეკომენდაციებს, რომლის დაცვა
                  დეველოპერებს ეხმარება შექმნან მაღალი ხარისხის, მოთხოვნადი და
                  მოსახერხებელი აპლიკაციები Apple-ს ეკოსისტემისთვის.
                </p>
                <p className="description">
                  * პრინციპები,რომლებიც iOS(HIG)-ს აქვს და მუდმივად განვითარების
                  პროცესშია,გადამწყვეტ როლს ასრულებს Apple-ს ხარისხის
                  გაუმჯობესებაში, რომლის მეშვეობითაც Apple მომხმარებელთა ნდობას
                  და მსოფლიო ბაზარზე პირველობას არ კარგავს.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="img"
              ></motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-two same-style-bck-img">
          <h1>shevzleb</h1>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-three same-style-bck-img">
          <h1>shevzleb</h1>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-four same-style-bck-img">
          <h1>shevzleb</h1>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-five same-style-bck-img">
          <h1>shevzleb</h1>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-six same-style-bck-img">
          <h1>shevzleb</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
export default FullPageScroll;
