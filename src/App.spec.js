import React from 'react';
import { Tile, SelectedTile, HighlightedTile } from './components/tile';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render 140 tile components', () => {
    expect(wrapper.find(Tile).length).toBe(140);
  });

  it('should render selected value as a SelectedTile', () => {
    wrapper.find(Tile).at(0).simulate('click');
    expect(wrapper.find(SelectedTile).length).toBe(1);
  });

  it('should unselect cell when clicked twice again', () => {
    wrapper.find(Tile).at(0).simulate('click').simulate('click');
    expect(wrapper.find(SelectedTile).length).toBe(0);
  });

  it('should render all tiles as Highlighted when number one is selected', () => {
    wrapper.find(Tile).at(0).simulate('click');
    expect(wrapper.find(SelectedTile).length).toBe(1);
    expect(wrapper.find(HighlightedTile).length).toBe(139);
    expect(wrapper.find(Tile).length).toBe(0);
  });

  it.each`
    numberOfTiles | selected | highlighted | tiles   | cellAt
    ${2}          | ${1}     | ${0}        | ${1}    | ${1}
    ${4}          | ${1}     | ${1}        | ${2}    | ${1}
    ${1024}       | ${1}     | ${14}       | ${1009} | ${64}
  `(
    'given a grid of $numberOfTiles when selecting at position $cellAt then selected=$selected; highlighted=$highlighted; tiles=$tiles',
    ({ numberOfTiles, selected, highlighted, tiles, cellAt }) => {
      const wrapper = shallow(<App numberOfTiles={numberOfTiles} />);
      wrapper.find(Tile).at(cellAt).simulate('click');
      expect(wrapper.find(SelectedTile).length).toBe(selected);
      expect(wrapper.find(HighlightedTile).length).toBe(highlighted);
      expect(wrapper.find(Tile).length).toBe(tiles);
    }
  );
});
