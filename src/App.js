import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Tile, HighlightedTile, SelectedTile } from './components/tile';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    };
  }

  onTileClick = (tileNumber) => () => {
    this.setState(({ selected }) => ({
      selected: selected === tileNumber ? '' : tileNumber
    }));
  };

  isSelected = (value) => value === this.state.selected;
  isMultiple = (value) => value % this.state.selected === 0;

  render() {
    const { numberOfTiles } = this.props;
    return (
      <div className="App">
        <ul className="list">
          {Array.from(Array(numberOfTiles))
            .map((e, i) => i + 1)
            .map((val) => {
              return (
                <li key={val}>
                  {this.isSelected(val) ? (
                    <SelectedTile onClick={this.onTileClick(val)} value={val} />
                  ) : this.isMultiple(val) ? (
                    <HighlightedTile
                      onClick={this.onTileClick(val)}
                      value={val}
                    />
                  ) : (
                    <Tile onClick={this.onTileClick(val)} value={val} />
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  numberOfTiles: PropTypes.number.isRequired
};

App.defaultProps = {
  numberOfTiles: 140
};

export default App;
