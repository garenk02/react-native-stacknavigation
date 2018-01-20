import React, { Component } from 'react';
import { Header, Left, Button, Icon, Body, Title, Right, Container, Content, Card, CardItem, Text } from 'native-base';

export default class EditScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Edit Screen 2</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name='paper-plane' />
              <Text>Edit Screen 2</Text>
              <Right>
                <Icon name='close' />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
