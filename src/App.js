import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from './routers/AppRouter';




function App() {
  

  return (
    <React.Fragment>
      <CssBaseline>
        <AppRouter />
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
