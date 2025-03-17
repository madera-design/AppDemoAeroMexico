import NumerodeVueloResponse from '../data/NumerodeVueloResponse.json';
import OrigenDestinoResponse from '../data/OrigenDestinoResponse.json';
import { FlightData } from '../types/flightTypes';

export const loadFlightData = (): FlightData[] => {
  return [NumerodeVueloResponse, OrigenDestinoResponse];
};