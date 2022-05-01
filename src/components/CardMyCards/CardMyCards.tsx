import React from 'react'

import { Container, TextCard } from './CardMyCards.styles'

import { Ionicons } from '@expo/vector-icons'

export function CardMyCards() {
  return(
    <Container>
      <Ionicons name='card-outline' size={20} color="#000" />
      <TextCard>Meus cartões</TextCard>
    </Container>
  )
}