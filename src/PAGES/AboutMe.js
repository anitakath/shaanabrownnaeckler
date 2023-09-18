import { useEffect } from "react";

//STYLES
import styles from "../STYLES/AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

//IMAGES
import img from "../Shaana/aboutMeImg.jpg";

//SEO
import { Helmet, HelmetProvider} from "react-helmet-async";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <HelmetProvider>
        <Helmet>
          <title> Shaanas Werdegang und Arbeit als Hebamme </title>
          <meta
            name=" description "
            content=" erhalte Informationen über den Werdegang und die Arbeit als Hebamme von Shaana Brown Näckler in Hamburg "
          />
          <meta
            name="keywords"
            content="Hebamme, Hamburg, Altona, Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Ottensen, Bahrenfeld, Shaana Brown Näckler, Schwangerenvorsorge, Wochenbett, Stillzeit, Pinard-Rohr, Baby, Babypflege, Schwangerschaft, 
            Schwangerschaftsbetreuung, Geburtsvorbereitung, Wochenbettbetreuung, Stillberatung, Babymassage, Elternberatung, Geburtsbegleitung, Familienplanung, Nachsorge, Hebammenbetreuung, Wochenbettbetreuung für zu Hause, Beratung
            bei Schwangerschaftsbeschwerden"
          />
        </Helmet>
      </HelmetProvider>

      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeTextWrapper}>
          <div
            className={styles.aboutMeTextContainer}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <h1> Meine Hebammenarbeit </h1>
            <p className={styles.paragraph}>
              Mein Fokus als Hebamme liegt auf der Betreuung während der
              Schwangerschaft sowie in der Zeit nach der Geburt. Um eine
              ganzheitliche und moderne Betreuung zu ermöglichen, verbinde ich
              traditionelles Hebammenwissen mit den neuesten Erkenntnissen der
              Geburtshilfe. <br />
              <br />
              Ich bin fest davon überzeugt, dass eine ganzheitliche Betreuung,
              die auf dem Verständnis der physiologischen Prozesse und den
              Bedürfnissen der Frauen basiert, eine positive Auswirkung auf das
              Geburtserlebnis und die postnatale Zeit haben kann. Indem wir
              gemeinsam arbeiten, können wir eine vertrauensvolle Beziehung
              aufbauen und einen Raum schaffen, in dem Du Dich sicher,
              unterstützt und respektiert fühlst. <br />
              <br />
              Mein Tätigkeitsbereich in Hamburg umfasst vorrangig den Raum
              Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Altona-Nord,
              Altona-Altstadt, Ottensen und Bahrenfeld.  Um eine individuelle
              und qualitativ hochwertige Betreuung sicherzustellen, nehme ich
              jeweils nur eine begrenzte Anzahl von Klientinnen gleichzeitig
              auf. 
              <br />
              Gerne spreche ich mir Dir Italienisch oder Spanisch.
            </p>
          </div>
          <div
            className={styles.aboutMeTextContainer}
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <h1> Mein Werdegang </h1>
            <p className={styles.paragraph}>
              2018 habe ich meine einjährige Dia Doula Ausbildung in Graz
              erfolgreich abgeschlossen. Als Dia Doula habe ich wertvolle
              Fähigkeiten und Techniken erlernt, um Frauen während der
              Schwangerschaft, Geburt und Wochenbettzeit auf physischer,
              emotionaler und mentaler Ebene zu begleiten. <br /> <br />
              Im Jahr 2021 habe ich mein staatliches Hebammenexamen in Hamburg
              bestanden. Diese Ausbildung ermöglichte es mir, meine Kenntnisse
              und Fähigkeiten in der Geburtshilfe zu vertiefen und mich auf die
              professionelle Betreuung von Müttern und ihren Neugeborenen zu
              spezialisieren. Während meiner Ausbildung habe ich ein fundiertes
              Verständnis für die medizinischen Aspekte der Schwangerschaft und
              Geburt erworben sowie für die Bedeutung einer einfühlsamen und
              ganzheitlichen Betreuung. <br /> <br />
              Um meine Expertise weiter auszubauen, habe ich im Jahr 2022 den
              Bachelor of Science in Hebammenwissenschaften in Buxtehude
              erfolgreich abgeschlossen. Dieses Studium eröffnet mir eine breite
              Palette an Wissen in den Bereichen Geburtshilfe, pränatale und
              postnatale Versorgung, Gesundheitsförderung und Forschung. Durch
              mein Studium konnte ich mich auch intensiv mit aktuellen
              wissenschaftlichen Erkenntnissen und Best Practices in der
              Hebammenarbeit auseinandersetzen. <br />
            </p>
          </div>
        </div>

        <div className={styles.aboutMeImgWrapper}>
          <img
            src={img}
            className={styles.aboutMeImg}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt="picture of Shaana Brown Näckler, Hebamme / midwife"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
