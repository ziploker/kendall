import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import $ from 'jquery';





const Section = styled.section`

    //background: rgb(136,189,188);
    //background: radial-gradient(circle, rgba(136,189,188,1) 0%, rgba(158,190,189,0.9612044646960347) 41%);
    background: #F7C562;
    height: 100vh;
    min-height: 400px;
    position: relative;


`;
var createReactClass = require('create-react-class');

var NewForm = createReactClass({
    
    
    getInitialState: function() {
      return {
        name: 'BOB',
        phone: '',
        email: '',
        company: '',
        zip: '',
        message: ''
      }
    },
    handleAdd: function(e) {
      e.preventDefault();
      var self = this;
      if (this.validForm()) {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");  
        $.ajax({
            
          url: '/leads',
          headers: {
            
            'X-CSRF-Token': csrf
          },
          method: 'POST',
          data: { event: self.state },
          success: function(data) {
            self.props.handleAdd(data);
            self.setState(self.getInitialState());
          },
          error: function(xhr, status, error) {
            alert('Cannot add a new record: ', error);
          }
        })
      } else {
        alert('Please fill all fields.');
      }
    },
    validForm: function() {
      if (this.state.name && this.state.phone &&
          this.state.email && this.state.company &&
          this.state.zip && this.state.message) {
        return true;
      } else {
        return false;
      }
    },
    handleChange: function(e) {
      var input_name = e.target.name;
      var value = e.target.value;
      this.setState({ [input_name] : value });
    },
    render: function() {
      return(
        <form className="form-inline" onSubmit={this.handleAdd}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="name"
                   placeholder="Name"
                   ref="name"
                   value={this.state.name}
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="phone"
                   placeholder="Phone"
                   ref="phone"
                   value={this.state.phone}
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="email"
                   placeholder="email"
                   ref="email"
                   value={this.state.email}
                   onChange={this.handleChange} />  
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="company"
                   placeholder="company"
                   ref="company"
                   value={this.state.company}
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="zip"
                   placeholder="zip code"
                   ref="zip"
                   value={this.state.zip}
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="message"
                   placeholder="message"
                   ref="message"
                   value={this.state.message}
                   onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      )
    }
  });


  function handleAdd(event) {
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