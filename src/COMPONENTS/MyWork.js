
//STYLES 
import styles from '../STYLES/Main.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from 'react'



function MyWork(){


    useEffect(() =>{
        AOS.init();
    }, [])



    return(
        <div className={styles.sectionContainer}>
         
                  <div className={styles.myWorkContainer}>




                      <h2 className={styles.myWorkTitle} > gerne unterstütze ich Sie bei der <span>Schwangerenvorsorge</span> und der <span>Wochenbettbetreung</span> </h2>

                        <div className={styles.myWorkWrapper} >
                            <div className={styles.workDetailsText} data-aos="fade-down"  data-aos-duration="1000">
                                <h1> Schwangerenvorsorge </h1>
                                
                         
                                    <p> Ich führe eigenständig und in Zusammenarbeit mit dem betreuenden Gynäkologen oder der betreuenden Gynäkologin
                                        Schwangerenvorsorgen durch. Dabei lege ich großen Wert auf eine ganzheitliche Betreuung, 
                                        die sowohl den Mutterschaftsrichtlinien als auch internationalen Leitlinien entspricht. </p>
                                       
                                    <p> Während der Schwangerenvorsorge überwache ich den Gesundheitszustand der werdenden Mutter und des ungeborenen Kindes. 
                                        Dazu gehören regelmäßige Untersuchungen wie Blutdruckmessungen, Gewichtskontrollen, 
                                        Urinanalysen und das Abhören der kindlichen Herztöne. Zudem beurteile ich das Wachstum des Babys.</p>
                                        
                                    <p className={styles.pBottom}> Bei den Vorsorgeuntersuchungen stehe ich Ihnen als Ansprechpartnerin zur Verfügung und beantworte gerne Ihre Fragen
                                        rund um Schwangerschaft, Geburt und Wochenbett. 
                                </p>

                                
                              
                            </div>


                            <div className={styles.care} data-aos="fade-up"   data-aos-duration="1000"> </div>

                   

                        </div>


                     
                      <div className={styles.myWorkWrapper}>


                             <div className={styles.careTwo} data-aos="fade-up"   data-aos-duration="1000">  </div>


                             <div className={styles.workDetailsText} data-aos="fade-down"   data-aos-duration="1000">
                                <h1>  </h1>
                           
                                    <p> Durch meine Orientierung an den Mutterschaftsrichtlinien und internationalen Leitlinien stelle ich sicher, 
                                        dass Sie eine qualitativ hochwertige Betreuung erhalten, die auf aktuellen wissenschaftlichen Erkenntnissen basiert.
                                        Ich halte mich kontinuierlich über neue Entwicklungen und Empfehlungen auf dem Gebiet der Geburtshilfe auf dem Laufenden, 
                                        um Ihnen die bestmögliche Versorgung bieten zu können.</p>
                                       
                                       
                                    <p> Es ist mir ein Anliegen, dass Sie sich während der Schwangerschaft gut aufgehoben fühlen und mit Vertrauen und Sicherheit 
                                        Ihre Schwangerschaft genießen können.</p>
                                        
                                    <p className={styles.pBottom}> Ich unterstütze Sie bei der Wahl der geeigneten Geburtsvorbereitungskurse und informiere Sie über wichtige Themen 
                                        wie Ernährung, körperliche Aktivität und allgemeines Wohlbefinden während der Schwangerschaft.</p>
                                      

                                   
                        
                            </div>

                          
                      </div>



                 




                 


                      <div className={styles.myWorkWrapper}>
                            <div className={styles.workDetailsText} data-aos="fade-down"   data-aos-duration="1000">
                                <h1> Wochenbettbetreung </h1>
                         
                                <p> Das Wochenbett ist eine bedeutende Phase, die unmittelbar nach der Geburt des Kindes beginnt und etwa 12 Wochen andauert. 
                                        In dieser Zeit des Ankommens, der Regeneration und des Kennenlernens stehe ich Ihnen als Hebamme zur Seite, 
                                        um Ihnen eine umfassende Betreuung und Unterstützung zu bieten.</p>
                                
                                    <p> Während des Wochenbetts liegt mein Fokus darauf, sowohl die physische als auch die emotionale Gesundheit von Ihnen 
                                        als Mutter und Ihrem Neugeborenen zu fördern. Ich überwache Ihre körperliche Erholung und stehe Ihnen bei möglichen
                                        Fragen oder Bedenken zur Seite. Dazu gehört die regelmäßige Überprüfung von Vitalparametern, 
                                        die Wundheilung nach der Geburt und die Unterstützung bei körperlichen Veränderungen, die mit dem Wochenbett einhergehen.</p>
                                    
                                    <p className={styles.pBottom}> Ein weiterer wichtiger Aspekt meiner Betreuung im Wochenbett ist die Unterstützung beim Stillen und der Förderung einer 
                                        erfolgreichen Stillbeziehung zwischen Ihnen und Ihrem Baby. Ich stehe Ihnen mit Rat und Tat zur Seite, beantworte Ihre Fragen, 
                                        unterstütze Sie bei der Anlegetechnik und stehe Ihnen bei eventuellen Stillproblemen zur Seite. Mein Ziel ist es,
                                        Ihnen das nötige Wissen und Vertrauen zu vermitteln, damit Sie eine entspannte und freudige Stillzeit erleben können.</p>
                                    
                                   

                              </div>

                            <div className={styles.careThree} data-aos="fade-up"   data-aos-duration="1000" > </div>


                        </div>


                     
                      <div className={styles.myWorkWrapper}>
                             <div className={styles.careFour} data-aos="fade-up"   data-aos-duration="1000">  </div>
                             <div className={styles.workDetailsText} data-aos="fade-down"   data-aos-duration="1000">
                                    <h1> </h1>
                                    <p> Darüber hinaus begleite ich Sie in dieser besonderen Zeit auch auf emotionaler Ebene. Ich stehe Ihnen als Ansprechpartnerin
                                            zur Verfügung, höre Ihnen zu und ermutige Sie, sich mit Ihren Gedanken und Gefühlen auseinanderzusetzen. 
                                            Ich unterstütze Sie dabei, sich an Ihre neue Rolle als Mutter anzupassen und gebe Ihnen Raum für offene Gespräche
                                            über mögliche Herausforderungen, Ängste oder Sorgen.</p>
                                            
                                            
                                    <p> Das Wochenbett ist eine Zeit des Übergangs und der intensiven Bindungsbildung zwischen Ihnen und Ihrem Baby.
                                            Als Hebamme begleite ich Sie einfühlsam und stehe Ihnen zur Seite, um sicherzustellen, 
                                            dass Sie diese wertvolle Zeit in einer unterstützenden und liebevollen Umgebung erleben können.</p>
                                           
                                    <p className={styles.pBottom}> Zögern Sie nicht, mich zu kontaktieren, um weitere Informationen zu meiner Wochenbettbetreuung zu erhalten. </p>
                                  
                               
                                
                        
                            </div>
                       

              

                      </div>

                      <h2 className={styles.myWorkTitle} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">Ich freue mich darauf, Sie während dieser einzigartigen Phase begleiten zu dürfen und freue mich über ein persönliches Kennenlernen.</h2>





                     
                      



                      
                    

                  </div>
        </div>
    )
}

export default MyWork;