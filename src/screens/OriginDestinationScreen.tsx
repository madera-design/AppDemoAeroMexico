import React, { useState } from 'react';
import { View, Alert, TextInput, Text, Pressable} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Container } from '../components/styled';
import { FooterTextLink, BoldText, FooterText, InputContainer, InputGroup, InputLabel, InputText, SearchButton, SearchButtonText, InputContainerDate, InputSubLabel, InputInfo } from '../components/styled';

type OriginDestinationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OriginDestination'
>;

interface OriginDestinationScreenProps {
  navigation: OriginDestinationScreenNavigationProp;
}

const OriginDestinationScreen: React.FC<OriginDestinationScreenProps> = ({
  navigation,
}) => {
  const [origin, setOrigin] = useState('Mexico City');
  const [destination, setDestination] = useState('Cancún');

  const [date, setDate] = useState(new Date());

  const handleSearch = () => {
    if (!origin || !destination || !date) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    navigation.navigate('FlightList', { origin, destination, date });
  };

  return (
    <Container>
      <InputGroup>
        <InputContainer>
          <InputLabel>Origin</InputLabel>
          <InputInfo style={{ justifyContent: 'flex-end'}}>
            <TextInput
                placeholder="Origin"
                value={origin}
                onChangeText={setOrigin}
                style={{ fontSize: 20, fontWeight: "bold"}}
              />
              <InputSubLabel>MEX</InputSubLabel>
          </InputInfo>
        </InputContainer>

        <InputContainer>
          <InputLabel>Destination</InputLabel>
          <InputInfo>
            <TextInput
              placeholder="Destination"
              value={destination}
              onChangeText={setDestination}
              style={{ fontSize: 20, fontWeight: "bold"}}
            />
            <InputSubLabel>CUN</InputSubLabel>
          </InputInfo>
        </InputContainer>
      </InputGroup>

      <InputContainerDate>
        <InputLabel>Date of departure</InputLabel>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <InputText>{date.toDateString()}</InputText>
          <FontAwesome6 name="calendar-days" size={24} color="black" />
        </View>
      </InputContainerDate>
  

      <SearchButton onPress={handleSearch}>
        <SearchButtonText>Search Flights</SearchButtonText>
      </SearchButton>

      <FooterText>
        <Text>Looking for a specific flight?{''}</Text>
        <FooterTextLink>
          <Text>Try searching by </Text>
          <Pressable>
            <BoldText>flight number</BoldText>
          </Pressable>
        </FooterTextLink>
      </FooterText>
    </Container>
  );
};

export default OriginDestinationScreen;
