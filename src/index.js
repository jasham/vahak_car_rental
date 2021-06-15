import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StepOne from './screens/booking/stepOne';
import StepTwo from './screens/booking/stepTwo';
import StepThree from './screens/booking/stepThree';
import StepFour from './screens/booking/stepFour';
import StepFive from './screens/booking/stepFive';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StepOne} />
        <Route exact path='/steptwo' component={StepTwo} />
        <Route exact path='/stepthree' component={StepThree} />
        <Route exact path='/stepfour' component={StepFour} />
        <Route exact path='/stepfive' component={StepFive} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
