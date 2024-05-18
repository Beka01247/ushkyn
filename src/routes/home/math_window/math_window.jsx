import React from 'react';
import "./math_window_style.css"
import Section from "./section/section"
import { Button, Flex, Segmented } from "antd"
import { Layout } from "antd"  


export default function Math_window(){
    return(
        <div>
            <div className="container-label">
                <div className='container-inline-flex'>
                    <div className="container-inline-flex container-math-label">
                        <p>Математика</p>
                    </div>
                    <div className="container-inline-flex container-parents-label">
                        <p>Ата-Аналарға</p>
                    </div>
                </div>
            </div>
            <div className="grey-br container-inline-block"></div>
            <div className="container-orange container-w-80 container-inline-flex">
                <div className="gradeNumber">
                    <p>5 сынып</p>
                </div>
            </div>

            <div className="container-math-window">
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
            </div>
        </div>
    )
}