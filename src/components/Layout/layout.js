import React from 'react';
import UpperContent from '../UpperContent/upperContent';
import NavItems from '../NavItems/NavItems'
import './layout.css';
import Dashboard from '../Dashboard/Dashboard';
import MiddleContent from '../MiddleContent/middleContent';
import Chartboard from '../MiddleContent/Chartboard/chartboard';
import FinalContent from '../FinalContent/finalContent'
const layout = (props) => {
    return (
        <div>
        <NavItems></NavItems>
        <div className = "grid">
        <Dashboard>
        </Dashboard>
        <div className = "text">
            <div className = "grid2">
                <UpperContent value = "Daily Transaction Volume" figure = "2,342"></UpperContent>
                <UpperContent value = "Daily Transaction Value" figure = "#4,000,000"></UpperContent>
                <UpperContent value = "Total Transaction Volume" figure = "452,000"></UpperContent>
                <UpperContent value = "Total Transaction Value" figure = "#4,000,000"></UpperContent>

            </div>
            <br /> <br />
            <div className = "grid3">

                <Chartboard/>    
                <MiddleContent></MiddleContent>
            </div>
            <br />
            <div className = "grid4">
                <h4>Payments</h4>
                <FinalContent></FinalContent>
  
            </div>
        </div>
      
        </div>
        
      

    
       
        </div>
        
    );
}

export default layout;