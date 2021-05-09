import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.term);
  };

  componentDidMount() {
    console.log('Componend was rendered to screen...');
  }

  componentDidUpdate() {
    console.log('Console just updated and rerendered!');
  }

  componentWillUnmount() {
    console.log('Component unmounted...');
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
                console.log(this.state.term);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
