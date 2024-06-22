import React from 'react'
import '../../assets/Css/SideDrawer.css';
import ReactDom from 'react-dom'

const SideDrawer = (props) => {
const content =  <aside className="side-drawer">{props.children}</aside>
return  ReactDom.createPortal(content, document.getElementById('drawn-hook'))

}

export default SideDrawer;
