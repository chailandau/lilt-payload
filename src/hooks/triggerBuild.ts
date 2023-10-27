import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv');

export const triggerBuildHook = async () => {
  try {
    const response = await axios.post(`${process.env.PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}`,
      {
        event: 'build',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
