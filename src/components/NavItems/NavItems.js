import React from 'react';
import {Input, InputGroup } from 'reactstrap';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
// import { Badge, Button } from 'reactstrap';
import './NavItems.css';
import profileImage from '../../assets/images/femi.JPG'
const navItems = (props) => {
    const placeValue = <i class="fa fa-search"></i>

    return (
        
        <div className = "NavItems">
        <Navbar color = "white">
        <NavbarBrand><strong className = "trans">TransMonitor</strong>
        </NavbarBrand>
        <InputGroup className = "input">
        
        <label>{placeValue}</label>
        <Input className = "input" placeholder = "Search..." />
        </InputGroup>
        <i class="fa fa-notification"></i>
        <Nav className = "nav">
            <NavItem>
                <NavLink>Support</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>FAQ</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                <div className = "badge-div">
                <i class="material-icons"> notifications</i>
                </div>
               
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
            <p className = "paragraph">                               Hello  <img className = "image" src = {profileImage} alt= "profileImg" /><br />
            Oluwafemi Akerele
            </p>
            
            </NavLink>
               
            </NavItem>
        </Nav>

        </Navbar>
        </div>
    )
}

export default navItems;