import React from 'react';
import './styles.css';

const List = (props) => {
    
  return(

  <table>
      <tbody>
         <th>Tasks To do!</th>
         
         { props.itemList.map((item, index) => 
            
            <tr  key ={index}><td key = {index} ><li key = {index}> {item} 
            
            <button id ="button1" value = {index} onClick = {props.deleteTask}>Remove</button>
            
            </li>
            
            </td>
           
            </tr>) }
       
       </tbody>
     </table>        
             
         );

}



export  {List };