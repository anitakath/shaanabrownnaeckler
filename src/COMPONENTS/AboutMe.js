

//STYLES 
import styles from '../STYLES/Main.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from 'react'

function AboutMe(){


    useEffect(() =>{
        AOS.init();
    }, [])


    return(
        <div className={styles.sectionContainer}>
           <h1> </h1>

           <div className={styles.aboutMeContainer}>
               
               <div className={styles.aboutMeImg} data-aos="zoom-in" data-aos-duration="1500"></div>

               <div className={styles.aboutMeTextWrapper}>
                    <div className={styles.aboutMeTextContainer} data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100"> 
                            <h1> Meine Hebammenarbeit </h1>
                            <p> mein Fokus als Hebamme liegt auf der Betreuung während der Schwangerschaft sowie in der Zeit nach der Geburt. Dabei verbinde ich traditionelles Hebammenwissen mit den neuesten Erkenntnissen der Geburtshilfe, um eine ganzheitliche und moderne Betreuung zu ermöglichen</p>

                            <p> Ich bin fest davon überzeugt, dass eine ganzheitliche Betreuung, die auf dem Verständnis der physiologischen Prozesse und den Bedürfnissen der Frauen basiert, eine positive Auswirkung auf das Geburtserlebnis und die postnatale Zeit haben kann. Indem wir gemeinsam arbeiten, können wir eine vertrauensvolle Beziehung aufbauen und einen Raum schaffen, in dem Sie sich sicher, unterstützt und respektiert fühlen.</p>

                            <p> Mein Tätigkeitsbereich umfasst vorrangig den Raum Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Altona-Nord, Altona-Altstadt, Bahrenfeld und Ottensen. </p>

                            <p>Um eine individuelle und qualitativ hochwertige Betreuung sicherzustellen, nehme ich jeweils nur eine begrenzte Anzahl von Klientinnen gleichzeitig auf. </p>
                        
                    </div>
                    <div className={styles.aboutMeTextContainer} data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300"> 
                            <h1> Mein Werdegang </h1>
                            <p> 2018 absolvierte ich meine Dia Doula Ausbildung in Graz. Als Dia Doula erlernte ich wertvolle Fähigkeiten und Techniken, um Frauen während der Schwangerschaft, Geburt und Wochenbettzeit auf physischer, emotionaler und mentaler Ebene zu begleiten. </p>

                            <p> Im Jahr 2021 absolvierte ich erfolgreich mein staatliches Hebammenexamen in Hamburg. Diese Ausbildung ermöglichte es mir, meine Kenntnisse und Fähigkeiten in der Geburtshilfe zu vertiefen und mich auf die professionelle Betreuung von Müttern und ihren Neugeborenen zu spezialisieren. Während meiner Ausbildung erwarb ich ein fundiertes Verständnis für die medizinischen Aspekte der Schwangerschaft und Geburt sowie für die Bedeutung einer einfühlsamen und ganzheitlichen Betreuung.</p>

                            <p> 
                                Um meine Expertise weiter auszubauen, absolvierte ich im Jahr 2022 einen Bachelor of Science in Hebammenwissenschaften in Buxtehude. Dieses Studium eröffnete mir eine breite Palette an Wissen in den Bereichen Geburtshilfe, pränatale und postnatale Versorgung, Gesundheitsförderung und Forschung. Durch mein Studium konnte ich mich auch intensiv mit aktuellen wissenschaftlichen Erkenntnissen und Best Practices in der Hebammenarbeit auseinandersetzen.</p>
                    </div>




               </div>
               
             

             
               
           </div>
        </div>
    )
}






export default AboutMe;