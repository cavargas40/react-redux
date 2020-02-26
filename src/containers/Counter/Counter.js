import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { ActionTypes } from '../../store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(result => (
            <li
              onClick={() => this.props.onDeleteResult(result.id)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ActionTypes.Increment }),
    onDecrementCounter: () => dispatch({ type: ActionTypes.Decrement }),
    onAddCounter: () => dispatch({ type: ActionTypes.Add, payload: 5 }),
    onSubstractCounter: () =>
      dispatch({ type: ActionTypes.Substract, payload: 5 }),
    onStoreResult: counter =>
      dispatch({ type: ActionTypes.StoreResult, payload: counter }),
    onDeleteResult: id =>
      dispatch({ type: ActionTypes.DeleteResult, payload: id })
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Counter);
