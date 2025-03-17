import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
export const ContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;
export const RouteText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const InfoTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const ChangeText = styled.Text`
  font-size: 14px;
  color: #666;
  text-decoration: underline;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;
export const HeaderImage = styled.Image`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const FlightInfoCard = styled.View`
  padding: 20px;
`;
export const FlightNumber = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;
export const DateText = styled.Text`
  font-size: 16px;
  color: #666;
  margin-right: 8px;
`;
export const StatusBadge = styled.View<{ status: string }>`
  background-color: ${({ status }) => {
    switch (status) {
      case 'ARRIVED':
        return '#000';
      case 'ON_TIME':
        return '#2196F3';
      case 'DELAYED':
        return '#FFC107';
      default:
        return '#9E9E9E';
    }
  }};
  border-radius: 10px;
  padding: 10px;
  align-self: flex-start;
`;

export const StatusText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
export const FlightTimes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const TimeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const FlightDetails = styled.View`
  margin-top: 20px;
`;
export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const SectionSubTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 15px;
`;
export const DetailRow = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  background-color:rgb(238, 236, 236);
  padding: 20px;
  border-radius: 4px
`;
export const ContentText = styled.View`
  margin-right: 30px;
`;
export const DetailTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 13px;
    margin-bottom: 13px;
`;
export const DetailTitleImg = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const DetailTextTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;
export const DetailText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const FlightItem = styled.View`
  padding: 16px;
  margin-bottom: 8px;
  background-color: #f9f9f9;
  border-radius: 20px;
  border: 1px solid black;
`;
export const FlightStatus = styled.View<{ status: string }>`
  padding: 10px;
  border-radius: 20px 0 20px 0;
  background-color: ${({ status }) => {
    switch (status) {
      case 'ARRIVED':
        return '#000';
      case 'ON_TIME':
        return '#2196F3';
      case 'DELAYED':
        return '#FFC107';
      default:
        return '#9E9E9E';
    }
  }};
  align-self: flex-start;
  margin-bottom: 8px;
  position: absolute;
`;
export const FlightSwitch = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    right: 0;
`;
export const FlightSwitchText = styled.Text`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;

export const FlightDetailsTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
export const FlightDetailsBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #000; 
`;
export const DetailButton = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DetailButtonText = styled.Text`
   font-size: 16px;
   text-decoration-line: underline;
`;
export const FlightStatusText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const AirportHours = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const AirportTime = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #00000066;
    text-align: center;
    padding-top: 15px;
`;
export const AirportCode = styled.Text`
   font-size: 16px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 50px;
`;
export const SearchButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 18px;
  border-radius: 12px;
  align-items: center;
  margin-top: 20px;
`;
export const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const FooterText = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #666;
  flex-direction: column;
`;
export const FooterTextLink = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 5px;
`;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const ContainerImg = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const InputGroup = styled.View`
 flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const InputContainer = styled.View`
   border: 2px solid #000;
    padding: 10px;
    border-radius: 12px;
    flex: 1; 
    margin: 0 8px;
`;
export const InputContainerDate = styled.View `
   border: 2px solid #000;
    padding: 10px;
    border-radius: 12px;
    margin: 0 8px;
`;
export const InputLabel = styled.Text`
  font-size: 12px;
  color: #555;
`;
export const InputText = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
`;
export const InputSubLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #0000004D
`;
export const InputInfo = styled.View`
  flex-direction: row;
  
  align-items: center;
`;