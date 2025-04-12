import React from 'react';

const ATSButton = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  );
};

export default ATSButton;

