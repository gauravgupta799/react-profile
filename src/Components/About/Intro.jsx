import React from 'react'

const datas = [
    {
        id:1,
        title:"Experience",
        subtitle:"1+ year of working experience as a ReactJs Developer"
    },
    {
        id:2,
        title:"Completed",
        subtitle:"40+ Projects"
    },
    {
        id:3,
        title:"Support",
        subtitle:"Online 24/7"
    },
]

const Intro = () => {
    return (
        <div className="about_info grid">
        {
            datas.map(data =>
                <div className="about_box" key={data.id}>
                    <i className="bx bx-award about_icon"></i>
                    <h3 className="about_title">{data.title}</h3>
                    <span className="about_subtitle">
                        {data.subtitle}
                    </span>
                </div>
            )
        }
        </div>
    )
}

export default Intro