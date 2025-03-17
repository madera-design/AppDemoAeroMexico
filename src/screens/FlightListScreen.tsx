import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import OrigenDestinoResponse from '../data/OrigenDestinoResponse.json';
import FlightCard from '../components/FlightCard';
import { Container, DateContainer, DateText, Header, RouteText } from '../components/styled';

type FlightListScreenRouteProp = RouteProp<RootStackParamList, 'FlightList'>;

type FlightListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FlightList'>;


interface FlightListScreenProps {
  route: FlightListScreenRouteProp;
  navigation: FlightListScreenNavigationProp;
}



const FlightListScreen: React.FC<FlightListScreenProps> = ({ route, navigation }) => {
  const { origin, destination, date, flights = [] } = route.params; 

  const flightData = flights.length > 0 ? flights : OrigenDestinoResponse.flightStatusCollection;

  const [favoriteFlights, setFavoriteFlights] = useState<string[]>([]);

  const toggleFavorite = (flightCode: string) => {
    setFavoriteFlights((prevFavorites) =>
      prevFavorites.includes(flightCode)
        ? prevFavorites.filter((code) => code !== flightCode)
        : [...prevFavorites, flightCode]
    );
  };

  const sortedFlights = [...flightData].sort((a, b) => {
    const isAFavorite = favoriteFlights.includes(a.segment.operatingFlightCode);
    const isBFavorite = favoriteFlights.includes(b.segment.operatingFlightCode);

    if (isAFavorite && !isBFavorite) return -1; 
    if (!isAFavorite && isBFavorite) return 1; 
    return 0;
  });

  return (
    <Container>
      <Header>
        <RouteText>{origin} - {destination}</RouteText>
        <DateContainer>
          <DateText>{flightData.length} results</DateText>
        </DateContainer>
      </Header>

      <FlatList
        data={sortedFlights}
        keyExtractor={(item) => `${item.segment.segmentCode}_${item.estimatedDepartureTime}`}
        renderItem={({ item }) => (
          <FlightCard
            item={item}
            onNavigate={() => navigation.navigate('FlightDetails', { flight: item })}
            isFavorite={favoriteFlights.includes(item.segment.operatingFlightCode)}
            toggleFavorite={() => toggleFavorite(item.segment.operatingFlightCode)}
          />
        )}
      />
    </Container>
  );
};

export default FlightListScreen;