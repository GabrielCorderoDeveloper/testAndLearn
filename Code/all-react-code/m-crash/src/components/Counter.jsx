import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  // };
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  // tagDetector() {
  //   // if (this.state.tags.length === 0) return <p>There are no tags :/</p>
  //   return this.state.tags.map(tag => <li key={tag} >{tag}</li>)
  // }
  getBadgeClass() {
    let classes = 'badge p-1 m-2 bg-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes
  }
  // handleIncrement() {
  //   console.log();
  //   this.setState({ value: this.state.value + 1 });
  // };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1});
  };

  handleIncrement = () => {
    this.props.onIncrement(this.props.counter);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>

        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>
          Increment
        </button>

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;