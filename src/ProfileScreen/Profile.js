import React from 'react';
import { Alert } from 'react-native';
import { Container, Content, Card, CardItem, Icon, Text, Right, Button, Header, Left, Body, Title } from 'native-base';
import { StackNavigator } from 'react-navigation';
import EditScreenOne from './EditScreenOne';
import EditScreenTwo from './EditScreenTwo';

export default class Profile extends React.Component {
  componentDidMount() {
    Alert.alert('Pengguna Tidak Ditemukan', 'Uups, Sepertinya anda belum login');
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name='paper-plane' />
              <Text>Tampilkan profil pengguna disini</Text>
              <Right>
                <Icon name='close' />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('EditScreenOne')}
          >
            <Text>ke Edit Screen 1</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Profil</Title>
      </Body>
      <Right />
    </Header>
  )
});
