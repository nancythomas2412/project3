import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <div className='text'>
            <h2>How to play dice game</h2>
            <li>Select any number from the right end.</li>
            <li>Click on dice image.</li>
            <li>After clicking on the dice,  if selected number and dice number are same, you will get the same points as on the dice.</li>
            <li>If you guess wrong, then 2 points will be deducted from your scoreboard on the left. </li>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    background-color: #d8c4c4;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size:24px;
    }
    .text{
        margin-top: 24px;
    }
`;