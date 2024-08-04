import RandomGosimPage from '@/pages/RandomGosimPage';
import gosimImg from '@/data/data';

function App() {

  return (
    <div className="App">
      <RandomGosimPage list={gosimImg} />
    </div>
  );
}

export default App;