import React from 'react';
import { useLocation } from 'react-router-dom';
import "./sectionWindow.css";

export default function SectionWindow() {
    const location = useLocation();
    const { topics } = location.state || {};

    console.log(topics);
    return (
        <div>
            <div className="container-label">
                <div className='container-inline-flex'>
                    <div className="container-inline-flex container-math-label">
                        <p>Математика</p>
                    </div>
                    <div className="container-inline-flex container-parents-label">
                        <p>Қорытындысы</p>
                    </div>
                </div>
            </div>
            <div className="grey-br container-inline-block"></div>


            {topics && <div>
                {topics.map(topic => (
                    <div key={topic._id} className="">
                        <div className="container-orange container-w-80 container-inline-flex">
                            <h2>{topic.title}</h2>
                        </div>
                        {topic.subtopics.map(subtopic => (
                            <div key={subtopic._id} className="subtopic-section">
                                <h3>{subtopic.title}</h3>
                                {subtopic.subsubtopics.map(subsubtopic => (
                                    <div key={subsubtopic._id} className="subsubtopic-section">
                                        <h4>{subsubtopic.title}</h4>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>}
        </div>
    );
}
