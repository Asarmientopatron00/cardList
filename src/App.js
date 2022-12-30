import React from 'react'
import Card from './components/Card';
import { CardProvider } from './contexts/cardContext/CardContext';
import { CommonProvider } from './contexts/commonContext/commonContext';

const App = () => {
  return (
    <AppState>
      <Card/>
    </AppState>
  );
} 

const AppState = ({children}) => {
  return(
    <CommonProvider>
      <CardProvider>
        {children}
      </CardProvider>
    </CommonProvider>
  );
}
export default App;