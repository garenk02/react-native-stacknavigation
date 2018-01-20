import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js';
import MainScreenNavigator from '../ChatScreen/index.js';
import Profile from '../ProfileScreen/index.js';
import SideBar from '../SideBar/SideBar.js';
import { DrawerNavigator } from 'react-navigation';

const HomeScreenRouter = DrawerNavigator(
  {
    Beranda: { screen: HomeScreen },
    Ngobrol: { screen: MainScreenNavigator },
    Profil: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
