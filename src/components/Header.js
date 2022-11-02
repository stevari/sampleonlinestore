import React from 'react'
import NavBar from './NavBar'


export default function Header() {
 return (
    <div style={{marginTop:-10,backgroundColor:"#201e1e",padding:1,marginLeft:-8,marginRight:0}}>
    <h2 style={{color:"#D1A55C", marginBottom:0}}>Sample Online Store</h2>
      <div style={{backgroundColor:"#201e1e"}}> made by Ville Vartia</div>
      <NavBar/>
    </div>
    
    
  )
}
