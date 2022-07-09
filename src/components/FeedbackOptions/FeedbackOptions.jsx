import React from 'react';
import PropTypes from 'prop-types';
import { OptionsBtn, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, handleOptionClick }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionsBtn type="button" onClick={() => handleOptionClick(option)}>
              {option}
            </OptionsBtn>
          </li>
        );
      })}
    </OptionsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};
