import { mount } from 'enzyme';
import App from './App';
import React from 'react';

describe('Test', () => {
  let component;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    component = mount(<App />);
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call use state', () => {
    let button = component.find('button');

    button.simulate('click');

    expect(setState).toBeCalled();
  })
})