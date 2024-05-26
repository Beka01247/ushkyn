// src/routes/home/math_window/math_window.jsx
import React, { useEffect, useState } from 'react';
import "./math_window_style.css";
import Section from "./section/section";
import { useNavigate } from 'react-router-dom';

export default function Math_window() {
  const [topics, setTopics] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/topics/all-topics')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setTopics(data.topics);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleSectionClick = () => {
    navigate('/home/section', { state: { topics } });
  }

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
      <div className="container-orange container-w-80 container-inline-flex">
        <div className="gradeNumber">
          <p>5 сынып</p>
        </div>
      </div>
      {topics && <div className="container-math-window" onClick={handleSectionClick}>
        <Section topics={topics} />
      </div>}
    </div>
  );
}
