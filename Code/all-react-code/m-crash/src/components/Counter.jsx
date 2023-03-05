import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      tags: ['tag1', 'tag2', 'tag3']
    };
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  };

  tagDetector() {
    if (this.state.tags.length === 0) return <p>There are no tags :/</p>

    return this.state.tags.map(tag => <li key={tag} >{tag}</li>)
  }

  getBadgeClass() {
    this.classes = 'badge p-1 m-2 bg-';
    this.classes += (this.state.count === 0) ? 'warning' : 'primary';
    return this.classes
  }

  render() {
    return (
      <>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement.bind(this)} className='btn btn-secondary btn-sm'>Increment</button>
        <ul>
          {this.tagDetector()}
        </ul>
      </>
    );
  }
}

export default Counter;