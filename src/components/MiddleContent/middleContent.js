import React from 'react';
import { Card,Progress } from 'reactstrap';

import './middleContent.css';

const middleContent = (props) => {
    return (
        <div>
        <Card className = "card2" body>
          <h6>Orders</h6>
          <Progress className = "progress" multi>
          <Progress bar color="success" value="80"></Progress>
          <Progress bar color="warning" value="20"></Progress>
          </Progress>
          <h7>Pending Orders: <span className = "span1"><strong>20</strong></span></h7>
          <h7>Reconciled Orders: <span className = "span2">80</span></h7>
          <h7>Total Orders: <span className = "span3">100</span></h7>
        </Card>
        <Card className = "card2" body>
        <h6>Payments</h6>
        <Progress className = "progress" multi>
        <Progress bar color="success" value="80"></Progress>
        <Progress bar color="warning" value="20"></Progress>
        </Progress>
        <h7>Pending Orders: <span className = "span1">20</span></h7>
        <h7>Reconciled Orders: <span className = "span2">80</span></h7>
        <h7>Total Orders: <span className = "span3">100</span></h7>
        </Card>
        </div>
    )
}

export default middleContent;