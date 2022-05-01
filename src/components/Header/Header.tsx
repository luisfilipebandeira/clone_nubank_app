import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import { 
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  TextWelcome,
  BalanceTotal,
  AccountView,
  Subtitle,
  BalanceTotalNotVisible,
  TotalBalance,
  OptionView,
  OptionIcon,
  OptionText
} from './Header.styles'

import { Ionicons } from '@expo/vector-icons'

export function Header() {
  const [showBalance, setShowBalance] = useState(false)

  return(
    <>
      <Container>
        <UpperView>
          <UserIconView>
            <Ionicons name='person-outline' size={20} color="#fff" />
          </UserIconView>      

          <OptionsIcon>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <Ionicons name='eye-outline' size={25} color="#fff" style={{ marginRight: 16 }} />
                ) : (
                <Ionicons name='eye-off-outline' size={25} color="#fff" style={{ marginRight: 16 }} />
              )}
            </TouchableOpacity>
            <Ionicons name='help-circle-outline' size={25} color="#fff" style={{ marginRight: 16 }} />
            <Ionicons name='mail-outline' size={25} color="#fff" />
          </OptionsIcon>
        </UpperView>

        <TextWelcome>
          Olá, Luis
        </TextWelcome>
      </Container>
      
      <TotalBalance>
          <AccountView>
            <Subtitle>Conta</Subtitle>

            <Ionicons name='chevron-forward-outline' size={25} color="#908D91" />
          </AccountView>

          {showBalance ? (
            <BalanceTotal>R$ 1365,98</BalanceTotal>
          ) : (
            <BalanceTotalNotVisible />
          )}
    </TotalBalance>

    <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 24, paddingRight: 50 }}
      >
        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name='cash-outline' size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix</OptionText>
        </OptionView>
      </ScrollView>
    </View>
    </>
  )
}