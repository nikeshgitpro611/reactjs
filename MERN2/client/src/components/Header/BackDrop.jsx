import React from 'react'
import reactDom from 'react-dom'
import '../../assets/Css/BackDrop.css';

const BackDrop = (props) => {
    return reactDom.createPortal(
        <div className="backdrop" onClick={props.onClick}></div>,
        document.getElementById('backDroop-hook')
    )
}

export default BackDrop
