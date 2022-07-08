import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleOptionClick}) => {
    return (
        <ul>
            {options.map(option => {
                return (<li key={option}>
                    <button type="button" onClick={() => handleOptionClick(option)}>{ option}</button>
                </li>);
            })}
        </ul>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleOptionClick: PropTypes.func.isRequired,
}