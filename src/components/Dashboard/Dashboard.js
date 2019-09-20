import React from 'react';
import './Dashboard.css';
import DashboardItems from '../Dashboard/DashboardItems/DashboardItems'

const dashboard = (props) => {
    return (
        <div className = "dashboard">
        
        <div >
            <DashboardItems />
                  
        </div>
        </div>
    )
}

export default dashboard;