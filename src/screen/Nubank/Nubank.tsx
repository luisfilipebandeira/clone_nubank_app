import React from 'react'
import { CardBlog } from '../../components/CardBlog/CardBlog'
import { CardMyCards } from '../../components/CardMyCards/CardMyCards'
import { Header } from '../../components/Header/Header'

import {ScrollView, StyleSheet, Text} from 'react-native'

import { Container, CardMyCardsView, CardBlogView, CardBlogItem } from './Nubank.styles'

export function Nubank() {
  return(
    <Container>
      <Header />
      <CardMyCardsView>
        <CardMyCards />
      </CardMyCardsView>

      <CardBlogView>
        <ScrollView 
          horizontal 
          contentContainerStyle={{ paddingHorizontal: 24 }}
          showsHorizontalScrollIndicator={false}
        >
          <CardBlogItem>
            <CardBlog link='https://www.google.com/' 
            text={
              <Text style={styles.textBlack}>Conheça Nubank vida: Seguro e simple 
                <Text style={styles.textPurple}> cabe no seu bolso</Text>
              </Text>} />
          </CardBlogItem>
          <CardBlogItem>
            <CardBlog link='https://www.google.com/' 
            text={
              <Text style={styles.textBlack}>Conheça Nubank vida: Seguro e simple 
                <Text style={styles.textPurple}> cabe no seu bolso</Text>
              </Text>} />
          </CardBlogItem>
          <CardBlogItem>
            <CardBlog link='https://www.google.com/' 
            text={
              <Text style={styles.textBlack}>Conheça Nubank vida: Seguro e simple 
                <Text style={styles.textPurple}> cabe no seu bolso</Text>
              </Text>} />
          </CardBlogItem>
        </ScrollView>
      </CardBlogView>
    </Container>
  )
}

const styles = StyleSheet.create({
  textBlack: {
    color: '#000'
  },
  textPurple: {
    color: '#820AD1'
  }
})