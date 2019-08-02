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
`;

const TextBox = styled.textarea``;

const Label = styled.label`
`;

const Form = styled.form``;


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
        <Form action='https://formspree.io/info@willient.com' method='post'>
          <fieldset>
            <Label htmlFor='first'>
              First Name
              <TextLine name="first"
                        value={this.state.first}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='last'>
              Last Name
              <TextLine name="last"
                        value={this.state.last}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='company'>
              Company
              <TextLine name="company"
                        value={this.state.company}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='email'>
              Email
              <TextLine name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.saveToState} required/>
            </Label>
            <Label htmlFor='phone'>
              Phone Number
              <TextLine name="phone"
                        value={this.state.phone}
                        onChange={this.saveToState} required/>
            </Label>



            <Label htmlFor='inquiry'>
              Inquiry
              <TextBox name='inquiry'
                       value={this.state.inquiry}
                       onChange={this.saveToState} required/>
            </Label>

            <button type='submit'>Send</button>
          </fieldset>
        </Form>
      </Wrapper>
    )
  }
}

export default ContactForm;