import React from 'react';
import TopTabsNavigator from '@/src/navigation/TopTabsNavigator';
import { Container, Subtitle, Title } from '../components/styled';



const HomeScreen = () => {
  return (
    <Container>
      <Title>Track your flight</Title>
      <Subtitle>Keep you informed in real time!</Subtitle>
      <TopTabsNavigator /> {/* Usa el navegador de pestañas superiores */}
    </Container>
  );
};

export default HomeScreen;