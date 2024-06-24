import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <InputContainer className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </InputContainer>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};


const InputContainer = styled.div`
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background-color: ${(props) =>!props.error? "" : 'tomato' }
}
& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`

export default CourseInput;
