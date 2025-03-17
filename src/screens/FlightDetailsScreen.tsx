import React, { useRef, useMemo} from 'react';
import { View, ScrollView, Image} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ContainerImg, DateText, DetailRow, DetailText, FlightDetails, FlightInfoCard, FlightNumber, DetailTextTitle, HeaderImage, SectionTitle, StatusBadge, SectionSubTitle, ContentText, DetailTitle,DetailTitleImg } from '../components/styled';
import { FlightDetailsTop, AirportHours, AirportCode, FlightStatusText} from '../components/styled';
import { useFormatTime } from '../hooks/useFormatTime';

type FlightDetailsScreenRouteProp = RouteProp<RootStackParamList, 'FlightDetails'>;
interface FlightDetailsScreenProps {
  route: FlightDetailsScreenRouteProp;
}


const FlightDetailsScreen: React.FC<FlightDetailsScreenProps> = ({ route }) => {
  const { flight } = route.params;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['70%', '90%'], []);
  const formatTime = useFormatTime;

  return (
    <ContainerImg>
      <HeaderImage source={require('../assets/background.png')} />
      <BottomSheet 
        ref={bottomSheetRef} 
        index={0} 
        snapPoints={snapPoints}
      >
        <BottomSheetView>
          <ScrollView>
            <FlightInfoCard>
              <DetailTitle>
                <View>
                  <FlightNumber>
                    {flight.segment.operatingCarrier} {flight.segment.operatingFlightCode}
                  </FlightNumber>
                  <DateText>
                    {new Date(flight.segment.departureDateTime).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </DateText>
                </View>
                <StatusBadge status={flight.segment.flightStatus}>
                  <FlightStatusText>
                    {flight.segment.flightStatus === "ON_TIME" ? "In the air" : flight.segment.flightStatus}
                  </FlightStatusText>
                </StatusBadge>
              </DetailTitle>
              <FlightDetailsTop>
                <View>
                  <AirportHours>{formatTime(flight.segment.departureDateTime)}</AirportHours>
                  <AirportCode>{flight.segment.departureAirport}</AirportCode>
                </View>
                <View>
                  <Image source={require('../assets/delayed.png')} />
                </View>
                <View>
                  <AirportHours>{formatTime(flight.segment.arrivalDateTime)}</AirportHours>
                  <AirportCode>{flight.segment.arrivalAirport}</AirportCode>
                </View>
              </FlightDetailsTop>
          
              <FlightDetails>
                <SectionTitle>Flight details</SectionTitle>
                <DetailTitle>
                  <DetailTitleImg>
                    <Image source={require('../assets/Despegue.png')} />
                    <SectionSubTitle>Departure</SectionSubTitle>
                  </DetailTitleImg>

                  <View>
                    <DetailTextTitle>{flight.segment.departureAirport} - {flight.segment.departureAirport} </DetailTextTitle>
                  </View>

                </DetailTitle>
                <DetailRow>
                  <ContentText>
                    <DetailTextTitle>Terminal</DetailTextTitle>
                    <DetailText>{flight.boardingTerminal}</DetailText>
                  </ContentText>
                  <ContentText>
                    <DetailTextTitle>Gate</DetailTextTitle>
                    <DetailText>{flight.boardingGate}</DetailText>
                  </ContentText>
                  <ContentText>
                    <DetailTextTitle>Boarding</DetailTextTitle>
                    <DetailText>{flight.boardingTime}</DetailText>
                  </ContentText>
                </DetailRow>
                <DetailTitle>

                  <DetailTitleImg>
                    <Image source={require('../assets/arrival.png')} />
                    <SectionSubTitle>Arrival</SectionSubTitle>
                  </DetailTitleImg>

                  <View>
                    <DetailTextTitle>{flight.segment.arrivalAirport} - Terminal {flight.arrivalTerminal} </DetailTextTitle>
                  </View>
                </DetailTitle>
                <DetailRow>
                  <ContentText>
                    <DetailTextTitle>Terminal</DetailTextTitle>
                    <DetailText>{flight.arrivalTerminal}</DetailText>
                  </ContentText>
                  <ContentText>
                    <DetailTextTitle>Est. Landing</DetailTextTitle>
                    <DetailText>{formatTime(flight.estimatedArrivalTime)}</DetailText>
                  </ContentText>
                </DetailRow>
              </FlightDetails>
            </FlightInfoCard>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
    </ContainerImg>
  );
};

export default FlightDetailsScreen;
