import React, {useState} from 'react';
import Dashboard from './views/dashboard';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  Text,
  StyleProvider,
} from 'native-base';
import {StyleSheet} from 'react-native';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

export default function App() {
  const [currentContent, setCurrentContent] = useState('dashboard');

  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content contentContainerStyle={styles.content}>
          {currentContent === 'dashboard' && <Dashboard />}
          {currentContent === 'todayAlerts' && <Text> Today Alerts</Text>}
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active={currentContent === 'dashboard'}
              vertical
              onPress={() => {
                setCurrentContent('dashboard');
              }}>
              <Icon name="home" />
              <Text>Dashboard</Text>
            </Button>
            <Button
              active={currentContent === 'todayAlerts'}
              vertical
              badge
              onPress={() => {
                setCurrentContent('todayAlerts');
              }}>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="alert" />
              <Text>Alertas Hoy</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  tab: {
    backgroundColor: '#121212',
  },
});
