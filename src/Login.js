import React, {Component, useState} from 'react';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';


export default class Login extends Component {

  userData;

  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  // Form Events
  onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

  onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

  onSubmit(e){
    e.preventDefault()

      this.setState({
      email:'',
      password:'',
    })
  }

  // React Life Cycle
  componentDidMount(){
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        email: this.userData.email,
        password: this.userData.password,
      })
    } else {
      this.setState({
        email:'',
        password:'',
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('user', JSON.stringify(nextState));
  }
  render() {

    return(

     <Modal size='small' trigger={<Button>Click This!</Button>} closeIcon>
          <div className="Container" style={style.container}>
            <div style={style.flex}>
              <div style={style.middleSide}>
                <div className="title-text" style={style.title}>
                  <h3 style={{fontSize:'35px', marginBottom:'0px'}}>Sign in with email</h3>
                  <p style={style.p}>Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>
                  <div className="formGroup">
                    <Form onSubmit={this.onSubmit}>
                      <Form.Field>
                          <div className="formEmail" style={style.emailBox}>
                            <label style={{color:'grey'}}>Your email</label>
                            <input type="text" className="formControl" value={this.state.email} onChange={this.onChangeEmail} placeholder='' />
                          </div>
                          <div className="formPassword" style={style.passwordBox}>
                            <label style={{color:'grey'}}>Your password</label>
                            <input type='password' className="formControl" value={this.state.password} onChange={this.onChangePassword} placeholder='' />
                          </div>
                      </Form.Field>
                      <Button type='submit' size='small' color='black'>Continue</Button>
                    </Form>
                  </div>
                  <h2 style={{fontSize:'16px'}}> <a className="Sign-link" href="#" style={{color:'green', marginLeft:'-10px'}}> <Icon name='angle left'/>All sign in options </a> </h2>
                  </div>
              </div>
            </div>
          </div>
      </Modal>
    )
  }
}

const style = {
  flex: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  middleSide: {
    height:"550px",
    width:"360px",
  },
  title: {
    marginTop:"40px",
    textAlign: "center",
  },
  p: {
    fontSize: "15px",
    color: "grey",
    marginBottom: "80px",
  },
  emailBox: {
    marginTop:'40px',
  },
  passwordBox: {
    marginTop:'40px',
    marginBottom: '40px'
  },
}
