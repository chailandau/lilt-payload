import axios from 'axios';

export const triggerBuildHook = async () => {
  try {
    console.log('hi!');
    
return await axios.post(`${process.env.PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}`);
  } catch (error) {
    console.error('Error:', error);
  }
};
