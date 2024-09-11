'use client';
import Character from './component/Character';
import Word from './component/Word';  
import Paragraph from './component/Paragraph';
export default function Index() {

  const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  const words = paragraph.split(" ")
  return (
    <main>
     
        <div style={{height: "50vh"}}></div>
        <Word paragraph={paragraph}/>
        <div style={{height: "50vh"}}></div>
    </main>
  )
  
}
