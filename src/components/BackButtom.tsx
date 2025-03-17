import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface CustomBackButtonProps {
  onPress: () => void;
}

const CustomBackButton: React.FC<CustomBackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5, // Sombra en Android
        }}
      >
        <Entypo name="chevron-left" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default CustomBackButton;