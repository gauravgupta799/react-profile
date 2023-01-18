import React,{useState} from 'react';
import "./Services.css";
import { ServicesData } from '../../Datas';

const Services = () => {
    const [toggle, setToggle]= useState(0)

    const toggleModal=(index)=>{
        setToggle(index)
    }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I Offer</span>
        <div className="services_container container grid">
            { ServicesData.map((services)=>
                    <div className="services_content" key={services.id}>
                        <div>
                            <i className="uil uil-web-grid services_icon"></i>
                            <h3 className="services_title">{services.title}</h3>
                        </div>
                        <span className="services_button" onClick={()=>toggleModal(services.id)}>
                            View More
                            <i className="uil uil-arrow-right services_button-icon"></i>
                        </span>
                        <div className={toggle === services.id ? "services_modal active_modal" : "services_modal"}>
                        { services.modal.map(data=>
                                <div className="services_modal-content" key={data.id}>
                                    <i className="uil uil-times services_modal-close" onClick={()=>toggleModal(0)}></i>
                                    <h3 className="services_modal-title">{data.title}</h3>
                                    <p className="services_modal-description">
                                    {data.desc}
                                    </p>
                                    <ui className="services_modal-services grid">
                                    { data.servicesList.map((service)=>{
                                            return (
                                                <li className="services_modal-service" key={service.id}>
                                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                                    <p className="services_modal-info">
                                                        {service.info}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }    
                                    </ui>
                                </div>
                            )
                        }
                        </div>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Services