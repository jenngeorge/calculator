import React from 'react';

const Results = (props) => {
  const results = props.results;

  const resultLis = Object.keys(results).map(key => (
    <li key={key + results[key].val } className="result-item cf">
      <div>
        {results[key].val}
      </div>
      <div>
        {results[key].note}
      </div>
      <button className="remove-result"
        onClick={props.removeResult.bind(null, key)}>
        Remove
      </button>
      <button className="use-result"
        onClick={props.sendValToCalculator.bind(null, results[key].val)}>
        Use
      </button>
    </li>
  ));

  return(
    <section className="sidebar-container">
      <h1>Saved Results</h1>
      <ul className="results-list">
        {resultLis}
      </ul>
    </section>
  );
};

export default Results;
