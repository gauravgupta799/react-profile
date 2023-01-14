import React,{useState} from 'react';
import "./Services.css";

const Services = () => {
    const [toggle, setToggle]= useState(0)

    const toggleModal=(index)=>{
        console.log("index", index)
        setToggle(index)

    }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I Offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Web <br/>Development</h3>
                </div>
                <span className="services_button" 
                onClick={()=>toggleModal(1)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>
                <div className={toggle ===1 ? "services_modal active_modal":
                "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"
                        onClick={()=>toggleModal(0)}></i>
                      <h3 className="services_modal-title">Web Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ui className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develope the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create UX element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your comapny brand. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies. 
                                </p>
                            </li>
                        </ui>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br/>Designer</h3>
                </div>
                <span className="services_button" 
                onClick={()=>toggleModal(2)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>
                <div  className={toggle ===2 ? "services_modal active_modal":
                "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"
                        onClick={()=>toggleModal(0)}></i>
                      <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ui className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develope the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create UX element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your comapny brand. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies. 
                                </p>
                            </li>
                        </ui>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Branding <br/> Designer</h3>
                </div>
                  <span className="services_button" 
                  onClick={()=>toggleModal(3)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>
                <div  className={toggle ===3 ? "services_modal active_modal":
                "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"
                        onClick={()=>toggleModal(0)}></i>
                      <h3 className="services_modal-title">Branding Designer</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ui className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I develope the user interface. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Web page development. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I create UX element interactions. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   I position your comapny brand. 
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies. 
                                </p>
                            </li>
                        </ui>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
