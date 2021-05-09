import React from 'react';

class App extends React.Component {
  state = {};

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
    return <div>APP: Hello World!</div>;
  }
}

export default App;
