import React, { useState } from 'react';

import { triggerBuildHook } from '../hooks/triggerBuild';

const TriggerBuildButton = () => {
  
  const [building, setBuilding] = useState(false);
  
  const buttonText = building ? 'Building...' : 'Trigger Me';
  
  const handleClick = () => {
    triggerBuildHook();
    setBuilding(true);
    
    setTimeout(() => {
      setBuilding(false);
    }, 60000);
  };

  const isLimg = process.env.PAYLOAD_PUBLIC_COMPANY === 'limg';
  
  return (
    <div className={'trigger-build'}>
      <button className={`trigger-build__btn ${isLimg ? 'teal' : ''}`} type='button' onClick={handleClick} disabled={building}>{buttonText}</button>
      {building && (
         <p className='trigger-build__text'>
         <i>Build #triggered. Refresh site in 3-5 minutes. If nothing changes after 10 minutes, text Chai :D</i>
       </p>
      )}
     
    </div>
    );};
    
    export default TriggerBuildButton;
    
