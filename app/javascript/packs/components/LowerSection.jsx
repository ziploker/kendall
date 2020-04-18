import React, {Component, useEffect, useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import $ from 'jquery';
import lilDownArrow from '../../../assets/images/lilDownArrow.svg'
import '../components/fix.js'



const Section = styled.section`

    //background: rgb(136,189,188);
    //background: radial-gradient(circle, rgba(136,189,188,1) 0%, rgba(158,190,189,0.9612044646960347) 41%);
    background: #F7C562;
    //height: 100vh;
    min-height: 400px;
    position: relative;

`;


const Form = styled.form`

  display: grid;
  //grid-template-columns: 90%;
  grid-gap: 1.5rem;

`;


const FormWrapper = styled.div`

  display: flex;
  justify-content: center;
  padding: 20px;
`;

const OptionWrapper = styled.div`


`;



function NewForm(props) {


  const [state, setState] = React.useState({

    
    name: '',
    nameIsFocused: false,
    phone: '',
    phoneIsFocused: false,
    email: '',
    emailIsFocused: false,
    company: '',
    companyIsFocused: false,
    zip: '',
    zipIsFocused: false,
    message: '',
    messageIsFocused: false,
    error: '',
    activeIndex: null

  })
    
   
  
  const handleAdd = e => {
    
    e.preventDefault();
    
    if (validForm()) {
      
      //get token for form submission
      const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");  
      $.ajax({
          
        url: '/leads',
        headers: {
          
          'X-CSRF-Token': csrf
        },
        method: 'POST',
        data: { 
          event: {
            name: state.name,
            phone: state.phone,
            email: state.email,
            company: state.company,
            zip: state.zip,
            message: state.message,
          }
        },
        success: function(data) {
          //props.handleAdd(data);
          setState({

            //focussed: (props.focussed) || false,
            name: '',
            phone: '',
            email: '',
            company: '',
            zip:  '',
            message: '',
            error: props.error || ''
          });
          
          var e = document.getElementById('select');
          console.log("eeeeeeeeeee is = " + e.value);
          
          if (e.value != 'null') {
           e.style.color = 'white';
          } else {
           e.style.color = 'green';
          }
    
        },
        error: function(xhr, status, error) {
          alert('Message did not reach server: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  }

  
  const validForm = () => {
    if (state.name && state.phone &&
        state.email && state.company &&
        state.zip && state.message) {
      return true;
    } else {
      return false;
    }
  }

  //handleChange = e => {
  //  var input_name = e.target.name;
  //  var value = e.target.value;

  //  console.log("input_name is " + input_name)
  //  console.log("value is " + value)
  //  this.setState({ [input_name] : value });
  //}

  const handleChange = event => {
    console.log(event)

    const v = event.target.value;

    const { id } = props;
    const value = event.target.value;
    console.log("nameeeeee = " + event.target.name)
    console.log("valluuee = " + event.target.value)
    console.log("focus = " + event.target.tagger)
    
    setState({ 
      ...state,
      [event.target.name]: v,
      error: '' 
    });
    //return onChange(id, value);
  }
  
  
  const getClass = () =>{
      
    if(state.focus === true)
      return "field focussed";
    else
      return "field";

  }

  const { focussed, value, error, label } = state;
  const { id, type, locked } = props;
  //const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'}`;
  //const fcn = state.nameIsFocused ? "xxxfocused" : "xxxNotfocused"
  
  return(

    <FormWrapper>
      <Form className="form-inline" onSubmit={handleAdd} >
        
        
        <div className="field" >
        
          <input type="text"
            index={1}
            
            className="form-control"
            name="name"
            
            placeholder="Name"
            
            value={state.name}
            onChange={handleChange} 
          />
        </div>

        
        
        <div className="field">
        
          <input type="text"
                index={2}
                
                className="form-control"
                name="phone"
                focus="phoneIsFocused"
                placeholder="(305) 555-3210"
                
                value={state.phone}
                onChange={handleChange} 
                
              
                />
          
        </div>
        
        
        <div className="field">
        
          <input type="text"
                index={3}
                className="form-control"
                name="email"
                placeholder="Email"
                
                value={state.email}
                onChange={handleChange} 
                
                />
            
        </div>
        
        
        <div className="field">
        
          <select value={state.company} id="select" onChange={handleChange} name="company" index={4}>
            
            <option style={{color: "white"}} id="placeHolderText" value="" disabled>Service needed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x25bc;</option>
            
              
            
            <option value="home/personal">Home/Personal</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
            
          </select>
          
        </div>
        
        
        <div className="field">
        
          <input type="text"
                index={5}
                className="form-control"
                name="zip"
                placeholder="Zip Code"
                
                value={state.zip}
                onChange={handleChange} 
                
                />
          
        </div>
        
      
        <div className="field">
          
          <input type="text"
                index={6}
                className="form-control"
                name="message"
                placeholder="Message"
                
                value={state.message}
                onChange={handleChange} 
                
                />
          

        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </Form>
    </FormWrapper>
  )
}



  const handleAdd = (event) => {
    //var events = this.state.events;
    //events.push(event);
    //this.setState({ events: events });
    console.log(event);
  }


function LowerSection(props){
    
   
    return (

        <Section>
            
            <NewForm handleAdd={handleAdd} />

        </Section>
       
            //<Video src={backgroundVid} autoPlay muted loop>
            //<source type="video/mp4"></source>

            //ERROR (get a new browser)


            //</Video>
       
    )
}


//export default props => <Hero {...props} />;
export default LowerSection