import React from 'react';
import {Card, Row, Col } from 'reactstrap';
import GraphImg from '../../assets/images/line-graph.jpg'

import './upperContent.css';

const upperContent = (props) => {
    return (
        <div>
        <Card className = "card" body>
          <Row>
          <Col sm="8">
          <p> <strong>{props.value}</strong></p>
          <h5>{props.figure}</h5>
          </Col>
          <Col sm="4">
             <img className = "graphImg"  src = {GraphImg} alt = "graphImg"/>
          
          </Col>
          </Row>
          </Card>
        </div>
    )
}

export default upperContent;