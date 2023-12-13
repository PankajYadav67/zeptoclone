import React from 'react';
import GoogleMaps from './GoogleMaps'; 
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/system';

export const LocationCard = ({ onClose }) => {
  const theme = useTheme();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 z-50 flex justify-center items-center">
      <div className="bg-white w-4/12 h-2/4 rounded-lg p-8 shadow-lg relative">
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
            color: '#FB3A68', // Set your preferred gray color
          }}
        >
          <CloseIcon />
        </IconButton>
        <GoogleMaps />
      </div>
    </div>
  );
};
