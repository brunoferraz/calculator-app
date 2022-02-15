import { RecoilRoot } from 'recoil';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <RecoilRoot>
      <Calculator></Calculator>
    </RecoilRoot>
  );
}

export default App;
