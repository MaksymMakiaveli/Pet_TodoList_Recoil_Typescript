import React from 'react';
import { Header, Container, ActionBlock, ContentBlock } from './components';

function App() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <div className="content">
            <ActionBlock />
            <ContentBlock />
          </div>
        </main>
      </Container>
    </>
  );
}

export default App;
