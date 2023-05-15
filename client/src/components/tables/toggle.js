import "./table.css"
import React, {useState } from 'react';

import {Link} from 'react-router-dom';

const Toggle = ({post}) => {

 
    

    const [worker] = useState(JSON.parse(localStorage.getItem('profile2')));
    if(post.username === worker?.result?.username ){

        return(
            


      <div>
        <table>
                <tr>
               
                <th>Availability</th>
                <th>Toggle</th>

                </tr>
                
        
            
                    <tr >
               
                    <td> {post.availability}</td>

                    
                    <td><Link to="/UpdateAvailability" state={post}><button >Change</button></Link></td>

                    </tr>
                
            </table>
        
        

      </div>
    )
        }
  }

export default Toggle;
