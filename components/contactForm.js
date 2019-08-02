import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const TextLine = styled.input`
  display:block;
  width: 80%;
  margin-left:10%;
  height:20px;
  border-radius:4px;
  border-style: solid;
  border-color: #DEDEDE;
  border-width: 1px;
  margin-bottom:20px;
  margin-top:5px;
  padding:5px;
  font-family: 'Blinker', sans-serif;
  font-size:14px;
`;

const TextBox = styled.textarea`
  display:block;
  margin-left:10%;
  width:80%;
  height:80px;
  border-radius:4px;
  border-style: solid;
  border-color: #DEDEDE;
  border-width: 1px;
  margin-top:5px;
  padding:5px;
  font-family: 'Blinker', sans-serif;
  font-size:14px;
`;

const Label = styled.label`
  margin-left:10%;
  font-size:18px;
`;

const Button = styled.button`
  display:block;
  position:absolute;
  right:20px;
  bottom:10px;
  margin-bottom:5px;
  height:40px;
  width:60px;
  border: 1px solid #DEDEDE;
  border-radius: 4px;
  background-color: rgb(22,42,62);
  color:white;
  font-size:16px;
  font-family: 'Blinker', sans-serif
`;

const Form = styled.form`
  min-width:80%;

`;

const Fieldset = styled.fieldset`
  position:relative;
  padding-bottom:60px;
  padding-top:40px;
`;

const HeaderWrapper = styled.div`
  min-width:80%;
`;
const Header = styled.h1``;


class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      first: '',
      last:'',
      company:'',
      email:'',
      phone:'',
      inquiry:''

    }
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {

    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>Contact Willient</Header>
        </HeaderWrapper>
        <Form action='https://formspree.io/info@willient.com' method='post'>
          <Fieldset>
            <Label htmlFor='first'>
              First Name
              <TextLine name="first"
                        value={this.state.first}
                        placeholder="First Name"
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='last'>
              Last Name
              <TextLine name="last"
                        value={this.state.last}
                        placeholder="Last Name"
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='company'>
              Company
              <TextLine name="company"
                        placeholder="Company"
                        value={this.state.company}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='email'>
              Email
              <TextLine name="email"
                        placeholder="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='phone'>
              Phone Number
              <TextLine name="phone"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.saveToState} required/>
            </Label>



            <Label htmlFor='inquiry'>
              Inquiry
              <TextBox name='inquiry'
                       placeholder="Inquiry for Willient"
                       value={this.state.inquiry}
                       onChange={this.saveToState} required/>
            </Label>

            <Button type='submit'>Send</Button>
          </Fieldset>
        </Form>
      </Wrapper>
    )
  }
}

export default ContactForm;