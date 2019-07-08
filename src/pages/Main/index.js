import React from "react";

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import {Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation} from './styles'

import Icon from "react-native-vector-icons/MaterialIcons"
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import Tabs from '~/components/Tabs'

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header/>

        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={AnimatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >

            <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-30, 0, 380],
                  extrapolate: 'clamp'
                })
              }]
            }}>
              <CardHeader>
                <Icon name='attach-money' size={28} color='#666'/>
                <Icon name='visibility-off' size={28} color='#666'/>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Doação de R$ 20,00 recebida de Jaqueline Castro hoje às 06:00h.
                </Annotation>
              </CardFooter>
            </Card>

          </PanGestureHandler>
        </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}
