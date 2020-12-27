import React from 'react';
import {TextField, Button } from '@material-ui/core';
import '../css/contact.css';
import {
    withStyles
  } from '@material-ui/core/styles';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.CssTextField = withStyles({
            root: {
              '& label.Mui-focused': {
                color: '#ffffff',
                fontFamily: "Lato"
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#ffffff',
                fontFamily: "Lato"
              },
            },
          })(TextField);
        this.state = { 
            name :{
                error:'',
                value:''
            },
            email:{
                error:'',
                value:''
            },
            message:{
                error:'',
                value:''
            },
            isValid :true,
            successMessage:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value =  target.value;
        this.setState({[name]:{
            error:'',
            value:value
            },
            isValid:true,
            successMessage:''
        })
    }

    handleSubmit(event){
        const name = this.state.name.value;
        const email = this.state.email.value;
        const message = this.state.message.value;
        if(!(name.trim())){
            this.setState( {name :{
                    error:"Name can't be empty",
                    value:name
                },
                isValid:false    
            });
            return;
        }
        if(!(email.trim())){
            this.setState( {email :{
                    error:"Email can't be empty",
                    value:email
                },
                isValid:false  
            });
            return;
        }
        if(!(message.trim())){
            this.setState( {message :{
                    error:"Message can't be empty",
                    value:message
                },
                isValid:false
            });
            return;
        }
        if(!email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/))
        {
            this.setState( {email :{
                    error:"Please enter a valid email",
                    value:email
                },
                isValid:false 
            });
            return;
        }
        if(this.state.isValid)
        {
            const templateId = 'template_pzqrm3g';
            this.sendFeedback(templateId, {message_html: this.state.message.value, from_name: this.state.name.value, from_mail: this.state.email.value})
            this.setState( { 
                name :{
                    error:'',
                    value:''
                },
                email:{
                    error:'',
                    value:''
                },
                message:{
                    error:'',
                    value:''
                },
                isValid :true
            });
            this.setState({successMessage:'Hey! thanks for responding, have a nice day!'});
        }
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
            ).then(res => {
            console.log('Email successfully sent!')
            })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render(){
        return(
            <React.Fragment>
                <div className = 'successMessage'>{this.state.successMessage}</div>
                <form noValidate autoComplete="off" >
                    <this.CssTextField 
                        label="Name" 
                        name="name"
                        value={this.state.name.value}
                        onChange = {this.handleChange}
                        error = {!(this.state.name.error === '')}
                        helperText = {this.state.name.error}
                        required
                        fullWidth
                        margin = "normal"
                        style={{fontFamily:"Lato"}}
                    />
                    <this.CssTextField 
                        label="Email" 
                        name="email"
                        value={this.state.email.value}
                        onChange = {this.handleChange}
                        error = {!(this.state.email.error === '')}
                        helperText = {this.state.email.error}
                        required
                        size="medium"
                        fullWidth
                        margin = "normal"
                    />
                    <this.CssTextField 
                        label="Message" 
                        name="message"
                        value={this.state.message.value}
                        onChange = {this.handleChange}
                        error = {!(this.state.message.error === '')}
                        helperText = {this.state.message.error}
                        required
                        size="medium"
                        fullWidth
                        margin = "normal"
                        multiline
                        rows = {4}
                    />
                    <Button 
                        variant = 'contained' 
                        className = "submitButton"
                        fullWidth   
                        onClick = {this.handleSubmit} 
                    >
                        Send
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}

export default Contact;