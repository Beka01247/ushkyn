import React from 'react';
import "./section.css";
import { Row, Col } from 'antd';

export default function Section({ topic }) {
    return (
        <Row justify="center" gutter={[24, 24]}>
            <Col span={6}>
                <div className='container-section'>
                    <h2>{topic.title}</h2>  
                </div>
            </Col>
        </Row>
    );
}
