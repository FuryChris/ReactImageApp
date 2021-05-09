import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos/', {
      params: { query: term },
    });
    this.setState({ images: res.data.results });
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
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar userSubmit={this.onSearchSubmit} />
        APP: Hello World! <br></br> Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
