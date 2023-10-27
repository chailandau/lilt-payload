import React from 'react';

import { triggerBuildHook } from '../hooks/triggerBuild';

const TriggerBuildButton = () => (
    <button type='button' onClick={triggerBuildHook}>Trigger Build</button>
  );

export default TriggerBuildButton;
