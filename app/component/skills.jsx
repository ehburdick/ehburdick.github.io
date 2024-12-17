"use client";
import React, {useState} from 'react'

const Skills = ({data}) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active) => (activeTab === active? 'bg-orange' : 'bg-grey');

  return (
    <div>
      <div className='flex'>
        {["soft", "hard"].map((el)=>( 
          <button key = {el} type='button' className={`btn ${setBg(el)}`} 
          onClick = {()=>setActiveTab(el)}>
            {el} Skills
          </button>
        ))}
      </div>
      <ul className = "flex felx-row flex-wrap content-start list-none py-4 gap-2">
        {data[activeTab].map(({icon, text}) =>(

          <li key = {text} className = 'skill'>
            <span> {icon} </span> {text} </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills