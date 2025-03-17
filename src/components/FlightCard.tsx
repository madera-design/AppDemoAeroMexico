import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { useFormatTime } from '../hooks/useFormatTime';
import {
  FlightItem,
  FlightStatus,
  FlightStatusText,
  FlightDetailsTop,
  FlightDetailsBottom,
  AirportCode,
  FlightNumber,
  DetailButtonText,
  AirportTime,
  FlightSwitch,
  AirportHours,
  FlightSwitchText,
} from './styled';

type FlightStatus = 'ARRIVED' | 'ON_TIME' | 'DELAYED';

interface FlightCardProps {
  item: {
    status: string;
    estimatedDepartureTime: string;
    segment: {
      departureAirport: string;
      operatingCarrier: string;
      operatingFlightCode: string;
      arrivalAirport: string;
    };
    estimatedArrivalTime: string;
  };
  onNavigate: () => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const calculateTimeRemaining = (departureTime: string, arrivalTime: string): string => {
  const departureDate = new Date(departureTime);
  const arrivalDate = new Date(arrivalTime);
  const differenceInMs = arrivalDate.getTime() - departureDate.getTime();
  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

const getStatusImage = (status: FlightStatus) => {
  switch (status) {
    case 'ARRIVED':
      return require('../assets/arrived.png');
    case 'ON_TIME':
      return require('../assets/onTime.png');
    case 'DELAYED':
      return require('../assets/delayed.png');
    default:
      throw new Error(`Unknown status: ${status}`);
  }
};

const FlightCard: React.FC<FlightCardProps> = ({ item, onNavigate, isFavorite, toggleFavorite }) => {
  const imageSource = getStatusImage(item.status as FlightStatus);
  const formatTime = useFormatTime;

  return (
    <FlightItem>
      <FlightStatus status={item.status}>
        <FlightStatusText>
          {item.status === "ON_TIME" ? "In the air" : item.status}
        </FlightStatusText>
      </FlightStatus>
      <FlightSwitch>
        <FlightSwitchText>Favorite</FlightSwitchText>
        <Switch
          trackColor={{ false: '#ccc', true: '#000' }}
          thumbColor={isFavorite ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleFavorite}
          value={isFavorite}
        />
      </FlightSwitch>
      <FlightDetailsTop>
        <View>
          <AirportHours>{formatTime(item.estimatedDepartureTime)}</AirportHours>
          <AirportCode>{item.segment.departureAirport}</AirportCode>
        </View>
        <View>
          <Image source={imageSource} />
          <AirportTime>{calculateTimeRemaining(item.estimatedDepartureTime, item.estimatedArrivalTime)}</AirportTime>
        </View>
        <View>
          <AirportHours>{formatTime(item.estimatedArrivalTime)}</AirportHours>
          <AirportCode>{item.segment.arrivalAirport}</AirportCode>
        </View>
      </FlightDetailsTop>
      <FlightDetailsBottom>
        <View>
          <FlightNumber>{item.segment.operatingCarrier} {item.segment.operatingFlightCode}</FlightNumber>
        </View>
        <View>
          <TouchableOpacity onPress={onNavigate}>
            <DetailButtonText>{'Details >'}</DetailButtonText>
          </TouchableOpacity>
        </View>
      </FlightDetailsBottom>
    </FlightItem>
  );
};

export default FlightCard;
