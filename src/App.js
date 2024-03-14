import logo from './logo.svg';
import './App.css';
import { Box, Container, Flex } from '@chakra-ui/react';
import { AllRoute } from './routes/AllRouters';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute />
      <Footer />

    </div>
  );
}

export default App;
