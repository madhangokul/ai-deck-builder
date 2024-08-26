import React, { createContext } from 'react';
import axios from 'axios';

const AxiosContext = createContext();

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const AxiosProvider = ({ children }) => (
  <AxiosContext.Provider value={axiosInstance}>
    {children}
  </AxiosContext.Provider>
);

export default AxiosContext;
