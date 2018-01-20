import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Beranda</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Aplikasi Ngobrol dengan orang2 hebat!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Ngobrol')}
          >
            <Text>Mulai Ngobrol</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profil')}
          >
            <Text>Profil Pengguna</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
