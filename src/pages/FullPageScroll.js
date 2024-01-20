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
              className="princips"
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
          <div className="content">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="princips"
            >
              . განვიხილოთ Proreate app iOS (HIG)-ის მიხედვით.
            </motion.h1>
            <div className="des-img proreate-img-text">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="paragraph layout-accessibility"
              >
                <p className="description proreate-desc ">
                  Layout :
                  <span>
                    {" "}
                    Procreate-ს აპში სამი ნაწილია, რომელიც შექმნილია
                    ნამუშევრებზე ფოკუსირების შესანარჩუნებლად. ზედა მარჯვენა
                    ნაწილი, სადაც განთავსებულია ყველაფერი რაც ხატვის დასაწყება
                    არის საჭირო, წაშლა, ფენები, ფერი, ხატვა და ასე შემდეგ.
                    მოდიფიკაციის ხელსაწყოები ყველა ხელმისაწვდომია მარცხენა
                    მხარეს, ფუნჯის ზომა/გამჭვირვალობა, ისრების
                    გაუქმება/გამეორება, აგრეთვე მომხმარებელს შეუძლია გამოიყენოს
                    Undo, Redo და Modify ღილაკები.
                  </span>
                </p>
                <p className="description proreate-desc">
                  Accessibility :
                  <span>
                    როგორც ჩვენთვის ცნობილია, Procreate ერთ-ერთი ყველაზე
                    მეგობრული პლათფორმაა ეიფლის ეკოსისტემაში, Procreate-მ
                    დაამატა ისეთი ფუნქციები,რომლებიც მხეველობა დარღვეულ ან
                    დაქვეითებულ მომხმარებლებს უადვილებს აპში გადაადგილებას,
                    ერთ-ერთია VoiceOver ამ ფუნქციის საშუალებით მომხმარებელს
                    შეუძლია გაიგოს თუ რას დააჭიროს ხელი ნავიგაციისთვის,
                    მენიუების წასაკითხად თუ სხვა მნიშვნელოვანი გვერდის
                    გასახსნელად. Dynamic Type- რომელიც ფონტის ზომას არეგულირებს
                    იმისდა მიხედვით თუ როგორ გვჭირდება და მეტად კომფორტულს ქმნის
                    აპლიკაციას გამოსაყენებლად.{" "}
                  </span>
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="img proreate-logo-img"
              ></motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-four same-style-bck-img">
          <div className="content">
            <div className="gestures-content">
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="img-style gestures-img"
              ></motion.div>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="gestures"
              >
                Gestures :
                <span>
                  მიუხედავად იმისა, რომ Apple Pencil-ი საუკეთესოდ მუშაობს
                  Procreate-თან, ხატვის დაწყება თითითაც(თითები) შესაძლებელია,
                  ყველაფერს რასაც Apple Pencil-ი გვთავზობს საჭიროების
                  შემთხვევაში შგვიძლია გავაკეთოთ ჟესტის ენით, როგორიცაა
                  გადიდება, დაპატარავება, გადაფურცვლა,შეცვლა და სხვა.
                  დასაფასებელია ის ფაქტიც რომ Procreate-მ მხარი დაუჭირა
                  მოძრაობის ფილტრაციას ტრემონის მქონე მომხმარებელთათვის.
                  Procreate ხელს უწყობს ერთი შეხედვით ფუნქციონირებასაც, თუმცა
                  ამასაც აქვს თავისი უარყოფითი მხარე, რადგან შეიძლება
                  შემთხვევითი შეხებით გადაიფურცლოს ან გვერდი შეიცვალოს,
                  თავდაპირველად Procreate-ს არ ჰქონდა Multitasking-ი და შემდგომ
                  დაემატა, ეხლა უკვე შესაძლებელია რამდენიმე ფაილის გახსნა და
                  ბევრად კომპორტულ გარემოში მუშაობა{" "}
                </span>
              </motion.p>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-five same-style-bck-img">
          <div className="content">
            <div className="gestures-content ">
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="gestures"
              >
                User Friendly :
                <span>
                  {" "}
                  გასათვალისწინებელია ის ფაქტი, რომ Procreate მუდმივად
                  ითვალისწინებს მომხმარებელთა რეკომენდაციებს და ხვეწავს აპს,
                  იმისდა მიხედვით თუ რის საშუალებას აძლევს iOS(HIG)-ი. Procreate
                  გვთავაზობს ნათელ და ლაკონურ მითითებებს აპპ-ში სამოძრაოდ, არ
                  დაკარგა თანმიმდევრულობა, რაც უზრუნველყოფს ნაცნობ გარემოს,
                  რომელიც მომხმარებლებს ეხმარება ნავიგაციაში და სხვადასხვა
                  აპებთან ურთიერთქმედებაში, რაც მეტად კომფორტულია. ფენების
                  მენეჯმენტი, აპლიკაცია მოიცავს ფენების მართვის მძლავრ
                  ფუნქციებს, რაც მომხმარებლებს გაუადვილებს მრავალ ფენასთან
                  მუშაობას, მათ გადაწყობას, გამჭვირვალობის რეგულირებას და
                  შერწყმის რეჟიმების გამოყენებას. ეს მოქნილობა გადამწყვეტია
                  ციფრული მხატვრებისთვის, რომლებიც მუშაობენ რთულ ილუსტრაციებზე.
                </span>
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="img-style gestures-img user-friend-img"
              ></motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection className="fullpage-section bck-img-six same-style-bck-img">
          <div className="content">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              . რეკომენდაციები:{" "}
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
                  * Procrete მომხმარებლებს არ სთავაზობს სარეზერვო ასლს, ფაილები
                  ინახება ადგილპობრივ გალერეაში აპის მთავარ გვერდზე იქამდე სანამ
                  აპი ფუნქციონირებს,თუ აპი წაიშლება ნამუშევრებიც გაქრება,
                  სიცხადისთვის კარგი იქნება თუ ეს პრობლემა აღმოიფხვრება.
                </p>
                <p>
                  * Widgets ერთ-ერთი ყველაზე მაგარი ფუნქციაა რაც იპადს აქვს,
                  თუმცა თუ გვინდა ეს Procreate-ში გამოვიყენოთ ან უბრალოდ გვინდა
                  დაგვიანებები თავიდან ავირიდოთ მუშაობის პროცესში, ამისთვის
                  აუცილებელია ipadOS 14 ან უფრო მაღალი ვერსია, ეს ნამდვილად არ
                  არის ყველა მომხმარებლისთის კომფორტული და მისაღები.
                </p>
                <p>
                  * რაც შეეხება ფენებს, სადაც ბევრ დადებით თვისებებთან ერთად
                  აქვს გარკვეული შეძღუდვები დიდ გაღიზიანებას იწვევს
                  მომხმარებლებში, ფენების რაოდენობა, რომელთა გამოყენებაც
                  შეგვიძლია ჩვენს პროექტებში პირდაპირ დამოკიდებულია ტილოს
                  დიზაინსა და ზომაზე, მაღტალია ipad-ის ახალი მოდელები
                  გვთავაზობენ მეტ ფენას სამუშაოდ თუმცა აქაც არის გარკვეული
                  შეზღუდვები.
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
                  * ვფიქრობ, საინტერესო და სასურველი იქნება დიზაინში თუ
                  დაემატება ერთი გამოყოფილი ველი, სადაც დამწყები ილუსტრატორები,
                  მხატვრები, ანიმატორები შეძლებენ თავიანთი ნამუშევრების
                  გაზიარებას სხვა მეტად გამოცდილი მომხმარებლებისთვის,
                  კომუნიკაცია და ინფორმაციის გაზიარება საერთო ინტერესების მქონე
                  ხალხთან მეტად ლოიალურს და საინტერესოს გახდის აპს.
                </p>
                <p>
                  * Procreate Potoshop-ის გაუმჯობესებული ვარიანტია, რომელმაც
                  ipad-ის დიზაინი იდეალურად გამოიყენა და ყველაფერი იდეალურად
                  განალაგა ეკრანზე, ბევრად კომფორტული გახადა მუშაობა თუმცა ცუდია
                  ის ფაქტი რომ ეს აპლიკაცია მხოლოდ ხელმისაწვდომია ipad-ზე და
                  iphone-ზე, ვფიქრობ macOS-ის ვერცია ძალიან მაგარი იქნება,
                  ბევრად დიდი სამუშაო სივრცე, აღქმა და მარტივი გადაადგილება
                  აპებს შორის.
                </p>
              </motion.div>
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
export default FullPageScroll;
