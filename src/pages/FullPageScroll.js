import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./styles/FullPageScroll.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
          <div className="content">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              . iOS(HIG) პრინციპები:{" "}
            </motion.h1>
            <div className="lists">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="first-list-box gap"
              >
                <p>
                  * Accessibility:{" "}
                  <span>
                    HIG გთავაზობთ შემოთავაზებებს ხელმისაწვდომი iOS აპლიკაციების
                    შემუშავებისთვის, რომლებიც შეესაბამება გლობალური
                    ხელმისაწვდომობის სტანდარტებს, რაც უზრუნველყოფს
                    გამოყენებადობას სხვადასხვა შესაძლებლობების მქონე
                    პირებისთვის.
                  </span>{" "}
                </p>
                <p>
                  * Gestures:{" "}
                  <span>
                    ჟესტები არის ადამინების მოწყობილობებთან ურთიერთქმედების
                    ერთ-ერთი საშუალება, მომხმარებელს უნდა ჰქონდეს ინტრერაქციის
                    მრავალი გზა ეს იქნება გადაფურცვლა, გადართვა, გადიდება,
                    ამოტრიალება თუ სხვა.{" "}
                  </span>{" "}
                </p>
                <p>
                  * სიცხადე:{" "}
                  <span>
                    UI ელემენტებს უნდა ჰქონდეს მკაფიო დანიშნულება და
                    ფუნქციონირება გამოყენებული იქნას ლაკონური ენა ეტიკეტებსა და
                    ინსტრუქციებში
                  </span>
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="second-list-box gap"
              >
                <p>
                  * Colors and Grapic:{" "}
                  <span>
                    გამოყენებული უნდა იქნას ეფექტურად, როგორც ესთეტიკური, ასევე
                    ფუნქციური ასპექტების გათვალისწინებით. მხედველობის დარღვევის
                    მქონე მომხმარებლებისთვის ფერი და გრაფიკა ეფექტურად უნდა იყოს
                    გამოყენებული ხელმისაწვდომობის უზრუნველსაყოფად.{" "}
                  </span>{" "}
                </p>
                <p>
                  * Layout:{" "}
                  <span>
                    {" "}
                    შემუშავებული უნდა იქნას თანმიმდევრული განლაგება, იმისდა
                    მიხედვით თუ რომელ პლათფორმაზე ვაწყობთ აპს, მომხმარებელს
                    მარტივად უნდა შეძლოს იმ საჭირო ინფორმაციის ნახვა, რაც მას
                    სჭირდება.{" "}
                  </span>
                </p>
                <p>
                  * User friendly:{" "}
                  <span>
                    ეიფლის აპების ერთ-ერთი უპირატესობაა მომხმარებელთა
                    რეკომენდაციების გათვალისწინება, ის მუდმივ უკუკავშირშია
                    მომხმარებლებთან და ცდილობს მათ გამოცდილებაზე შექმნას ან
                    გააუმჯობესოს მისი პროდუცტი.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
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
