import React, { useState } from 'react';
import "./Skills.css";
import {SKILLs} from "../../utils/data.js";
import SkillCard from './SkillCard/SkillCard.jsx';
import SkillsInfoCard from './SKillsInfoCard/SkillsInfoCard.jsx';

const Skills = () => {

  const [selectSkill, setSelectSkill] = useState(SKILLs[0]);

  const handleSelectSkill = (data) => {
    setSelectSkill(data);
  }

  return (
    <section className='skills-container'>
        <h5>Thenical Proficiency</h5>

        <div className='skills-content'>
            <div className='skills'> 
                {SKILLs.map((item) => (
                    <SkillCard key={item.title} iconUrl={item.icon} title={item.title}
                    isActive={selectSkill.title === item.title}
                    onClick={() => {
                      handleSelectSkill(item);
                    }} />
                ))}
            </div>

            <div className='skills-info'>
                  <SkillsInfoCard 
                    heading={selectSkill.title} skills={selectSkill.skills}
                  />
            </div>
            
        </div>
    </section>
  )
}

export default Skills