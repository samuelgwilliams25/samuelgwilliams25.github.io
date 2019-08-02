import styled from 'styled-components';

import Splash from '../components/splash';
import ContactForm from '../components/contactForm';

const Wrapper = styled.div`
  height:100vh;
`;

console.log('hello');
export default () => (
  <Wrapper>
    <ContactForm />
    <Splash />

  </Wrapper>
)

