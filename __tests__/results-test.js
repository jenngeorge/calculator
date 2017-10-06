import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import Results from '../components/results';

configure({ adapter: new Adapter() });

describe("Results Component", () => {
  const initialState = {results: {
                1: {val: 9, note: "note"},
                2: {val: 42, note: "the answer"},
                3: {val: 7, note: "lucky #"},
                4: {val: 8, note: "fav number"}
                }};

  const resultsComponent = shallow(<Results results={initialState.results}
                            removeResult={() => {}}
                            sendValToCalculator={()=>{}}/>);

  test("renders the correct number of results from props", () => {
    expect(resultsComponent.find('li').length).toEqual(4);
  });

});
