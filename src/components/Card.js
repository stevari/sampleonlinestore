import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
export default function Card(props) {
  return (
    <div className={props.className}>
        <div className="small-div">
            <i className={props.className}></i>
            <StoreIcon sx={{ fontSize: 40 }}/>
        </div>
        

    <div className='big-div'>
        <span className='div-title'>
            {props.title}
        </span>
        <br/>
        <span>
            {props.description} 
        </span>
    </div>
    </div>

      
  )
}
