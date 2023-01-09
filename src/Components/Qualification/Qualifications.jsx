import React,{useState} from 'react'
import "./qualification.css";

const Qualifications = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={
                toggleState === 1 ? "qualification_button qualification_active button--flex" 
                  : "qualification_button button--flex"}
                  onClick={()=>toggleTab(1)}
                  >
                    <i className="uil uil-graduation-cap"></i>
                    Education
                </div>

                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" 
                  : "qualification_button button--flex"}
                  onClick={()=>toggleTab(2)}
                  >
                    <i className="uil uil-briefcase-alt"></i>
                    Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" 
                :"qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Web Developer
                            </h3>
                            <span className="qualification_subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Art Directior
                            </h3>
                            <span className="qualification_subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Web Designer
                            </h3>
                            <span className="qualification_subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2019- 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Backend Developer
                            </h3>
                            <span className="qualification_subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={toggleState === 2 ? "qualification_content qualification_content-active" 
                :"qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Product Desginer
                            </h3>
                            <span className="qualification_subtitle">
                                Microsoft - Spain
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt">
                                2021 - Present</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                UX Desginer
                            </h3>
                            <span className="qualification_subtitle">
                                Apple Inc. - Spain 
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt">
                                2020 - 2021</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Web Development
                            </h3>
                            <span className="qualification_subtitle">
                                Figma - Spain
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2019- 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                UX Desginer
                            </h3>
                            <span className="qualification_subtitle">
                                Apple Inc. - Spain 
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt">
                                2020 - 2021</i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications