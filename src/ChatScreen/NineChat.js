import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Item, Label, Input, Text } from 'native-base';
import HomeScreen from '../HomeScreen';

export default class MiminChat extends Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Mimin</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Ngobrol sama Mimin</Label>
            <Input />
          </Item>
          <Button
            rounded
            success
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigate('Profil')}
          >
            <Text>Profil Mimin</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
