import React from 'react';

const BeforeDashboard: React.FC = () => process.env.PAYLOAD_PUBLIC_COMPANY === 'limg' ? <h1>Long Island Mini Golf</h1> : <h1>Long Island Laser Tag</h1>;

export default BeforeDashboard;
