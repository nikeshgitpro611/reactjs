import React,{useContext} from 'react'
import { auth } from '../UiShow'

const Content = () => {
    const context = useContext(auth);
    const {toggle, colorMode} = context;
    console.log(toggle, colorMode);
  return (
    <div>
        <h2>Context Field</h2>
        <main style={{padding : '20px', backgroundColor : colorMode ? '#555' : '#fff', color: colorMode ? '#fff' : '#000'}}>
        <p>This is some content that changes with the theme.</p>
        </main>
    </div>
  )
}

export default Content