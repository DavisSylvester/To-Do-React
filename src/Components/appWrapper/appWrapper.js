import React, { Component } from 'react';
import styled from 'styled-components';
import { ResultContainer }  from "../ResultContainer/index.js"

import "./appWrapper.css";

const TaskContainer = styled.div`
    border:1px solid orange;
    height:400px;
    flex-grow:1;
`
// const ResultContainer = styled.div`
//     border:3px dashed black;
//     height:400px;
//     flex-grow:2;    
// `

export class AppWrapper extends Component {
  render() {
    return (
      <div className="appWrapper">


         {/* <div className="task-container">
            <TaskContainer></TaskContainer>
        </div>  */}
        
        
        <TaskContainer className="task-container" />
        <ResultContainer className="result-container" />
        
      </div>
    );
  }
}

// export default AppWrapper;