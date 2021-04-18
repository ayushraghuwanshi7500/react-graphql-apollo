import './App.css';
import spaceXlogo from './spaceXlogo.png';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import Launches from './components/Launches';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={spaceXlogo}
          alt='SpaceX Logo'
          style={{
            position: 'relative',
            bottom: '15vh',
            width: 300,
            display: 'block',
            margin: 'auto'
          }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
