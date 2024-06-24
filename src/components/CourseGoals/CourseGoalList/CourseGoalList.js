import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

import styled from 'styled-components';

const CourseGoalList = props => {
  return (
    <List className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </List>
  );
};

const List  = styled.ul`
  
  list-style: none;
  margin: 0;
  padding: 0;
  background-color:${(props) => props.backgroundColor };
`

export default CourseGoalList;
