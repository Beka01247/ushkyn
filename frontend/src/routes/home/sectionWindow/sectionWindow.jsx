import React from 'react';
import { useLocation } from 'react-router-dom';
import "./sectionWindow.css";

export default function SectionWindow() {
    const location = useLocation();
    const { topic } = location.state || {};

    console.log(topic);
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

            {topic && (
                <div>
                    <div className="container-orange container-w-80 container-inline-flex container-centered">
                        <h2>{topic.title}</h2>
                    </div>
                    {topic.subtopics.map(subtopic => (
                        <div key={subtopic._id} className="subtopic-section">
                            <h3>{subtopic.title}</h3>
                            {subtopic.subsubtopics.map(subsubtopic => (
                                <div key={subsubtopic._id} className="subsubtopic-section">
                                    <h4>{subsubtopic.title}</h4>
                                    {subsubtopic.videos.map((video, index) => (
                                        <div key={index} className="video-section">
                                            <p>Video {index + 1}</p>
                                            <a href={video} target="_blank" rel="noopener noreferrer">{video}</a>
                                        </div>
                                    ))}
                                    {subsubtopic.tests.map((test, index) => (
                                        <div key={index} className="test-section">
                                            <p>Test {index + 1}</p>
                                            <p>{test.question}</p>
                                            <ul>
                                                {test.options.map(option => (
                                                    <li key={option._id}>{option.text}</li>
                                                ))}
                                            </ul>
                                            <a href={test.videoExplanation} target="_blank" rel="noopener noreferrer">Video Explanation</a>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
