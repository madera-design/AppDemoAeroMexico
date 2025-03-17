import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import NumerodeVueloResponse from '../data/NumerodeVueloResponse.json';
import { FontAwesome6} from '@expo/vector-icons';
import { BoldText, Container, FooterText, FooterTextLink, InputContainer, InputContainerDate, InputGroup, InputInfo, InputLabel, InputSubLabel, InputText, SearchButton, SearchButtonText } from '../components/styled';

type FlightNumberScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FlightNumber'
>;

interface FlightNumberScreenProps {
  navigation: FlightNumberScreenNavigationProp;
}


const FlightNumberScreen: React.FC<FlightNumberScreenProps> = ({ navigation }) => {
  const [flightNumber, setFlightNumber] = useState('500');
  const [date, setDate] = useState(new Date());

  const handleSearch = () => {
    if (!flightNumber) {
      Alert.alert('Error', 'Please enter a flight number');
      return;
    }

    const flight = NumerodeVueloResponse.flightStatusCollection.find(
      (f) => f.segment.operatingFlightCode === flightNumber
    );

    if (!flight) {
      Alert.alert('No Results', 'No flights found with the provided flight number');
      return;
    }

    navigation.navigate('FlightList', {
      origin: flight.segment.departureAirport,
      destination: flight.segment.arrivalAirport,
      number: flight.segment.operatingCarrier+' '+flight.segment.operatingFlightCode,
      date: new Date(flight.segment.departureDateTime),
      flights: [flight],
    });
  };

  return (
    <Container>
      <InputGroup>
        <InputContainer>
          <InputLabel>Flight number</InputLabel>
          <InputInfo>
            <InputSubLabel>AM</InputSubLabel>
            <TextInput
              placeholder="Flight number"
              value={flightNumber}
              onChangeText={setFlightNumber}
              style={{ fontSize: 20, fontWeight: "bold"}}
            />
          </InputInfo>
        </InputContainer>

        <InputContainerDate>
        <InputLabel>Date of departure</InputLabel>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <InputText>{date.toDateString()}</InputText>
          <FontAwesome6 name="calendar-days" size={24} color="black" />
        </View>
      </InputContainerDate>
      </InputGroup>
      <SearchButton onPress={handleSearch}>
        <SearchButtonText>Search Flight</SearchButtonText>
      </SearchButton>
       <FooterText>
          <Text> Can’t find your flight number?</Text>
          <FooterTextLink>
            <Text>Try searching by </Text>
            <Pressable >
              <BoldText>destination</BoldText>
            </Pressable>
          </FooterTextLink>
        </FooterText>
    </Container>
  );
};

export default FlightNumberScreen;