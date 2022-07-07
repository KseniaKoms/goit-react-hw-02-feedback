import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from './Section';
import Notification from './Notification';


class App extends Component {

  state = {
  good: 3,
  neutral: 2,
  bad: 2,
    }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value)
  }
    
  countPositiveFeedbackPercentage = (total) => {
    return Math.round(this.state.good / total * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        
        <Section title="Statistics">
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage} 
          />
        </Section>
      </>
    )
  }
};

export default App
