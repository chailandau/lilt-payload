import axios from 'axios';

export const triggerBuildHook = async () => {
  try {
    const response = await axios.post(`${process.env.PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}`,
      {
        event: 'build',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
