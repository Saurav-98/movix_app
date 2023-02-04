import React, { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => console.log(res));
  };

  return (
    <div className='App' style={{ color: 'white' }}>
      <h2>Let's Build this App</h2>
    </div>
  );
};

export default App;
