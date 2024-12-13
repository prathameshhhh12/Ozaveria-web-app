import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Categories, StepsSection } from './components/Features';
import { Stats } from './components/Stats';
import HowItWorks from './components/HowItWorks/howitworks';

function App() {
  return (
    <Layout>
      <Hero />
      <Categories />
      <HowItWorks/>
      <StepsSection />
      <Stats />
    </Layout>
  );
}

export default App;