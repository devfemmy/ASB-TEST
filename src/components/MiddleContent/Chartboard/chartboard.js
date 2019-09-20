import React, {Component} from 'react';
import {Card, Row, Col } from 'reactstrap';
import {Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import weatherImg from '../../../assets/images/weather-graph.jpg'

import './chartboard.css';

class Chartboard extends Component{
    constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
          dropdownOpen: false
        };
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
       const todayDate = new Date;
        const displaydate = todayDate.toDateString();
        const symbol = "<"
        const symbol2 = ">"
        return (
            <div>
            <Card className = "card3" body>
              <Row>
              <Col sm="6">
              <h5>{displaydate}</h5>
              </Col>
              <Col sm="3">
              <ButtonDropdown className = "button4" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className = "button4" caret>
                1 Jan - 1 June
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>1 July - 1 Dec</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
              </Col>
              <Col sm="1">
              <Button className = "btn" color = "none">{symbol}</Button>
              </Col>
              <Col sm="1">
              <Button className = "btn" color = "none">{symbol2}</Button>
              </Col>
              </Row>
              <br />
              <br />
              <hr />
              <Row>
              <Col sm="2">
              <p><strong>Jan</strong></p>
              </Col>
              <Col sm="2">
              <p><strong>Feb</strong></p>
              </Col>
              <Col sm="2">
              <p><strong>Mar</strong></p>
              </Col>
              <Col sm="2">
              <p><strong>Apr</strong></p>
              </Col>
              <Col sm="2">
              <p><strong>May</strong></p>
              </Col>
              <Col sm="2">
              <p><strong>Jun</strong></p>
              </Col>
              </Row>
              <Row>
              <Col sm="12">
                <img className = "weatherImg" src = {weatherImg} alt = "weatherImg" />
              </Col>
              </Row>
              </Card>
            </div>
        )
    }
   
}

export default Chartboard;