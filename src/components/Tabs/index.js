import React from 'react';

import { Container, TabsContainer, TabsItem, TabText } from './styles';

import Icon from "react-native-vector-icons/MaterialIcons"

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp'
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp'
      })
    }} >
      <TabsContainer>
        <TabsItem>
          <Icon name='person-add' size={25} color="#FFF"/>
          <TabText>Indicar amigos</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='chat-bubble-outline' size={25} color="#FFF"/>
          <TabText>Cobrar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='arrow-downward' size={25} color="#FFF"/>
          <TabText>Depositar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='arrow-upward' size={25} color="#FFF"/>
          <TabText>Transferir</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='lock' size={25} color="#FFF"/>
          <TabText>Bloquear cartão</TabText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
