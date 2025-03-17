import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { ChangeText, DateContainer, DateText, HeaderContainer, RouteText, ContentTitle, InfoTitle } from '../components/styled';
import { FontAwesome6 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

interface CustomHeaderTitleProps {
  route: RouteProp<RootStackParamList, 'FlightList'>;
}

const CustomHeaderTitle: React.FC<CustomHeaderTitleProps> = ({ route }) => {
  const { origin, destination, date, number } = route.params;
  return (
    <HeaderContainer>
      <ContentTitle>
        {number ? (
          <RouteText>{number}</RouteText>
        ) : (
          <InfoTitle>
            <RouteText>{origin}</RouteText>
            <AntDesign name="arrowright" size={16} color="black" />
            <RouteText>{destination}</RouteText>
          </InfoTitle>
        )}
      </ContentTitle>
      <DateContainer>
        <DateText>
          {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </DateText>
        <ChangeText> | <FontAwesome6 name="calendar-days" size={16} color="black" /> Change</ChangeText>
      </DateContainer>
    </HeaderContainer>
  );
};

export default CustomHeaderTitle;