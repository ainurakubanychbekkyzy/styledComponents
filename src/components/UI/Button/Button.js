import React from 'react';

import styled from 'styled-components';

const Button = props => {
  return (
    <Btn type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

const Btn = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
 
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
&:focus {
  outline: none;
}
&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`

export default Button;
