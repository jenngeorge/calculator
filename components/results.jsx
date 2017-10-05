import React from 'react';

const Results = (props) => {
  const results = props.results;

  const resultLis = Object.keys(results).map(key => (
    <li key={key + results[key].val }>
      <div>
        {results[key].val}
      </div>
      <div>
        {results[key].note}
      </div>
      <button onClick={props.removeResult.bind(null, key)}>
        Remove
      </button>
      <button onClick={props.sendValToCalculator.bind(null, results[key].val)}>
        Use
      </button>
    </li>
  ));

  return(
    <ul>
      {resultLis}
    </ul>
  );
};

export default Results;
