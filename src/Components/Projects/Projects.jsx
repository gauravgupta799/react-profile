import React from 'react';
import "./project.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { allProjects } from './allProjects';
import { frontendProjects } from './frontendData';
import { backendProjects } from './backendData';
import { mernProjects } from './MERNdata';
import { designProjects } from './designs';

const Projects = () => {
  return (
    <section className="projects_section section container" id="projects">
       <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">What I build</span>
      <Tabs className="tabs_container">
        <TabList className="tablist">
            <Tab>All</Tab>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>MERN</Tab>
            <Tab>Designs</Tab>
        </TabList>
        <TabPanel>
        <div className="services_container container grid">
        {allProjects.map((project) =>{
            const {img, name ,description} = project;
            return (
                <div className="projects_content">
                    <div className="project-img-container">
                        <img src={img} alt="projectImg" className="project-img" />
                    </div>
                    <div className="project-title">
                        <h3 className="services_title">{name}</h3>
                    </div>
                    {/* <div className="project_desc-container">
                        <h3 className="services_title">{name}</h3>
                        <p className="project-dec">{description}</p>
                    </div> */}
                    <div style={{display: 'flex', 
                    alignItems: 'center',
                    gap:"7rem",
                    }}>
                        <button className="btn btn-1">Demo</button>
                        <button className='btn btn-2'>Source</button>
                    </div>
            </div>
            )
        })}
        </div>
        </TabPanel>
        <TabPanel>
        <div className="services_container container grid">
        {
            frontendProjects.map((project) =>{
                const {img, name ,description} = project;
                return(
                    <div className="projects_content">
                        <div className="project-img-container">
                            <img src={img} alt="projectImg" className="project-img" />
                        </div>
                        <div className="project-title">
                            <h3 className="services_title">{name}</h3>
                        </div>
                        {/* <div className="project_desc-container">
                            <h3 className="services_title">{name}</h3>
                            <p className="project-dec">{description}</p>
                        </div> */}
                        <div style={{display: 'flex', 
                        alignItems: 'center',
                        gap:"7rem",
                        }}>
                            <button className="btn btn-1">Demo</button>
                            <button className='btn btn-2'>Source</button>
                        </div>
                    </div>
                )
            })
        }
           
        </div>
        </TabPanel>
        <TabPanel>
             <div className="services_container container grid">
                { backendProjects.map((project) =>{
                    const {img, name ,description} = project;
                    return(
                        <div className="projects_content">
                            <div className="project-img-container">
                                <img src={img} alt="projectImg" className="project-img" />
                            </div>
                            <div className="project-title">
                                <h3 className="services_title">{name}</h3>
                            </div>
                            {/* <div className="project_desc-container">
                                <h3 className="services_title">{name}</h3>
                                <p className="project-dec">{description}</p>
                            </div> */}
                            <div style={{display: 'flex', 
                            alignItems: 'center',
                            gap:"7rem",
                            }}>
                                <button className="btn btn-1">Demo</button>
                                <button className='btn btn-2'>Source</button>
                            </div>
                        </div>
                    )})
                }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="services_container container grid">
            { mernProjects.map((project) =>{
                    const {img, name ,description} = project;
                    return(
                        <div className="projects_content">
                            <div className="project-img-container">
                                <img src={img} alt="projectImg" className="project-img" />
                            </div>
                            <div className="project-title">
                                <h3 className="services_title">{name}</h3>
                            </div>
                            {/* <div className="project_desc-container">
                                <h3 className="services_title">{name}</h3>
                                <p className="project-dec">{description}</p>
                            </div> */}
                            <div style={{display: 'flex', 
                            alignItems: 'center',
                            gap:"7rem",
                            }}>
                                <button className="btn btn-1">Demo</button>
                                <button className='btn btn-2'>Source</button>
                            </div>
                        </div>
                )})
            }
            
        </div>
        </TabPanel>
        <TabPanel>
        <div className="services_container container grid">
                {  designProjects.map((project) =>{
                    const {img, name ,description} = project;
                    return(
                        <div className="projects_content">
                            <div className="project-img-container">
                                <img src={img} alt="projectImg" className="project-img" />
                            </div>
                            <div className="project-title">
                                <h3 className="services_title">{name}</h3>
                            </div>
                            {/* <div className="project_desc-container">
                                <h3 className="services_title">{name}</h3>
                                <p className="project-dec">{description}</p>
                            </div> */}
                            <div style={{display: 'flex', 
                            alignItems: 'center',
                            gap:"7rem",
                            }}>
                                <button className="btn btn-1">Demo</button>
                                <button className='btn btn-2'>Source</button>
                            </div>
                        </div>
                    )})
                }
        </div>
        </TabPanel>
      </Tabs>
    </section>
  )
}

export default Projects
