import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';

const routes = ['Beranda', 'Ngobrol', 'Profil'];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../assets/drawer-cover.png')}
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('../../assets/logo.png')}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
