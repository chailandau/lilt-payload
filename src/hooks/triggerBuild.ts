import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const triggerBuildHook = async () => {
  try {
    console.log('hi2!');
    
return await axios.post(`${process.env.PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}`);
  } catch (error) {
    console.error('Error:', error);
  }
};
