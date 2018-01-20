import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Item, Label, Input, Text } from 'native-base';
import HomeScreen from '../HomeScreen';

export default class JadeChat extends Component {
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
            <Title>Maman</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Ngobrol sama Maman</Label>
            <Input />
          </Item>
          <Button
            rounded
            warning
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigate('Profil')}
          >
            <Text>Profil Maman</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
