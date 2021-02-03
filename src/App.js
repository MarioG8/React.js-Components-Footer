import { Homepage } from './containers/homepage';
import SecondF from './Footer/SecondF';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <Homepage />
      <SecondF />
    </BrowserRouter>
  );
}

export default App;
