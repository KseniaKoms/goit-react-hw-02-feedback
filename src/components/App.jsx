import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from './Section';
import Notification from './Notification';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleOptionClick = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
    
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value)
  }

  countPositiveFeedbackPercentage = (total) => {
    return Math.round(this.state.good / total * 100);
  }

  render () {

    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    
   return  (
   <>
     <Section title="Please leave feedback">
         <FeedbackOptions handleOptionClick={this.handleOptionClick} options={options} />
     </Section>
     <Section title="Statistics">
       {total === 0
         ? <Notification message="There is no feedback" />
         : <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={total}
           positivePercentage={positivePercentage}>
         </Statistics>}
     </Section>
   </>
  )
  }
}

export default App
