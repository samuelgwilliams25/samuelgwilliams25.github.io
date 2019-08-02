import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const GlobalStyles = createGlobalStyle`
  body{
    @import url("https://fonts.googleapis.com/css?family=Blinker&display=swap");
    font-family: 'Blinker', sans-serif
  }
`;

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
