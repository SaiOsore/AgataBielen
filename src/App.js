import React from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router/router';

import { GlobalStyle } from './theme/global';
import Wrapper from './components/layouts/Wrapper/Wrapper';
import Container from './components/layouts/Container/Container';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Socials from './components/socials/Socials';

const App = () => {
  const routeResult = useRoutes(Routes)
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Container>
        {routeResult}
      </Container>
      <Socials />
      <Footer />
    </Wrapper>
  );
}

export default App;