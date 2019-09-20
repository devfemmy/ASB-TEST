import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Input, InputGroup } from 'reactstrap';
import { Table } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import iconImg from '../../assets/images/letter-w.jpg';
import './finalContent.css'

class FinalContent extends Component{
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
              dropdownOpen: true
            };
          }
    
          toggle() {
            this.setState({
              dropdownOpen: !this.state.dropdownOpen
            });
          }
    
    render() {
        const placeValue2 = <i class="fa fa-search"></i>
        const inputData = [
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Reconciled'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Pending'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Reconciled'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Reconciled'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Pending'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Unreconciled'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Reconciled'

            },
            {
                id: 1,
                itemType: '',
                price: 73430,
                transactionNo: 123456789,
                time: 12.33,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Unreconciled'

            },
            {
                id: 2,
                itemType: '',
                price: 734344,
                transactionNo: 123456789,
                time: 12.32,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Pending'

            },
            {
                id: 3,
                itemType: '',
                price: 734366,
                transactionNo: 123456789,
                time: 12.31,
                status: {
                    completed: 'reconciled',
                    non_completed: 'non-reconciled'
                    
                },
                btn_mode: 'Reconciled'
                
                

            }
        ];

        const outputData = inputData.map( data => {
            let colorCode = data.btn_mode;
            return (
                
                <tbody>
                  <tr>
                    <th scope="row"><img className = "IconImg" src = {iconImg} alt = "IconImg" />Apple Macbook 15 250 SSD 12GB</th>
                    <td>{data.price}</td>
                    <td>{data.transactionNo}</td>
                    <td>{data.time}</td>
                    <td><Button className = {colorCode} color = "outline">{data.btn_mode}</Button></td>
                    <td><DropdownToggle className = "caret2"  caret color="primary">
                    </DropdownToggle></td>
                  </tr>
                </tbody>
              
            )
        })

        return (
            <div>
                <div>
                    <Row>
                        <Col sm="5">
                            <h7>Showing<DropdownToggle className = "caret"  caret color="primary">20
                          </DropdownToggle>out of 500 payments</h7>
                        </Col>
                        <Col sm="4">
                        <InputGroup className = "input2">
            
                        <label>{placeValue2}</label>
                        <Input className = "input3" placeholder = "Search Payments" />
                        </InputGroup>
                        </Col>
                        <Col sm="3">
                        <ButtonDropdown className = "btn9 active" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle  className = "btn9 active" caret>
                          All
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>All</DropdownItem>
                          <DropdownItem header>Reconciled</DropdownItem>
                          <DropdownItem header>Un-reconciled</DropdownItem>
                          <DropdownItem header>Settled</DropdownItem>
                          <DropdownItem header>Unsettled</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                        </Col>
                    </Row>
                    
                
                </div>
                <div>
                <Table>
                <thead>
                  <tr>
                    <th>Item Type</th>
                    <th>Price</th>
                    <th>Transaction No</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                    {outputData}
                    </Table>
                </div>
                <br /> <br />
                <Row>
                <Col sm="9">
                <h7>Showing 1 to 10 of 500 entries</h7>
                </Col>
                <Col sm="3">
                <Pagination aria-label="Page navigation example">
                  <PaginationItem disabled>
                    <PaginationLink previous href="#">Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#">Next</PaginationLink>
                  </PaginationItem>

                </Pagination>
                </Col>
                </Row>
              
    
            </div>
        )
    }
   
}

export default FinalContent