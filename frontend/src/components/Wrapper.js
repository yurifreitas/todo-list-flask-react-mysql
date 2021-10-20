import React from 'react';
function Wrapper({ className, children }) {
  return <section className={className}>{children}</section>;
}

export default Wrapper;
