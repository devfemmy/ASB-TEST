import React from 'react';
import { Button } from 'reactstrap';
import './DashboardItems.css';
import { NavLink } from 'reactstrap';

const dashboardItems = (props) => {
    return (
        <div className = "dashboardItems">
        <div className = "button-div">
        <Button className = "button" color="success">GENERATE INVOICE</Button>
        </div>
        <br /><br />
        <div className = "main-area">
        <h6>Main</h6>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">work_outline </i> <h8>Overview</h8></NavLink>
        <br />

        <h6>Payments</h6>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">payment </i> <h10>All Payments</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">restore </i> <h10>Reconciled Payments</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">trending_down </i> <h10>Unreconciled Payments</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">touch_app </i> <h10>Manual Settlements</h10></NavLink> <br />

        <h6>Orders</h6>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">local_grocery_store </i> <h10>All Orders</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">check_box </i> <h10>Reconciled Orders</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">remove_shopping_cart </i> <h10>Unreconciled Orders</h10></NavLink>
        <NavLink className = "button2" outline color="secondary"> <i class="material-icons">person </i> <h10>Merchant Profile</h10></NavLink>
       

        </div>
        </div>
    )
}

export default dashboardItems;