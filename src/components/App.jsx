import React, { Component } from 'react';
import Statistics from './Statistics/index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerButtonClick = e => {
    this.setState(prevState => {
      const keyName = e.target.name;
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handlerButtonClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handlerButtonClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handlerButtonClick}>
          Bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Statistics>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <h1>Please leave feedback</h1>
//         <button type="button">Good</button>
//         <button type="button">Neutral</button>
//         <button type="button">Bad</button>
//         <h2>Statistic</h2>
//         <p>Good:</p>
//         <p>Neutral:</p>
//         <p>Bad:</p>
//     </div>
//   );
// };
