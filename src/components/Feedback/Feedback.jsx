import FeedbackButtons from 'components/FeedbackButtons';
import FeedbackStatistics from 'components/FeedbackStatistics';
import React, { Component } from 'react';


class Feedback extends Component {

  state = {
  good: 2,
  neutral: 4,
  bad: 1
    }

    countTotalFeedback = () => {
     
    }
    
    countPositiveFeedbackPercentage = () => {

    }
    
 render() {
    return (
        <div>
            <h2>Please leave feedback</h2>
            <FeedbackButtons />

            <FeedbackStatistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={ this.countPositiveFeedbackPercentage} />

        </div>)
    }
}

export default Feedback