import React from 'react';
import './index.scss';

const Content: React.FC = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;
