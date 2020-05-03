import React from 'react';
import { shallow } from 'enzyme';
import { Tile, SelectedTile, HighlightedTile } from '.';

describe.each`
  name                 | Component
  ${'Tile'}            | ${Tile}
  ${'SelectedTile'}    | ${SelectedTile}
  ${'HighlightedTile'} | ${HighlightedTile}
`('$name', ({ Component }) => {
  it('should render given value as a child', () => {
    expect(
      shallow(<Component value={1} onClick={() => {}} />)
        .find('.tile')
        .text()
    ).toBe('1');
  });

  it('should bind given onClick to button', () => {
    const onClick = jest.fn();
    shallow(<Component value={1} onClick={onClick} />)
      .find('.tile')
      .simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
