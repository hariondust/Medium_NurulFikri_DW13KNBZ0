import React, {Component, useState} from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from './Login';

export default class Register extends Component {

  render() {

    return(

     <Modal size='small' trigger={<Button basic>
       Sign in</Button>} closeIcon>
          <div className="Container" style={style.container}>
            <div style={style.flex}>
              <div style={style.inleftSide}>
                <img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png" alt="website logo left"/>
              </div>
              <div style={style.middleSide}>
                <div className="title-text" style={style.title}>
                <br/>
                  <h3 style={{fontSize:'35px', padding:'0px'}}>Join Medium</h3>
                  <p style={style.p}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love. </p>
                  <div className="Username">
                    <Form>
                        <Form.Field>
                          <label style={{color:'grey'}}>Your username</label>
                          <input placeholder='' />
                        </Form.Field>
                    </Form>
                  </div>
                  <br/>
                  <div className="Password">
                  <Form>
                      <Form.Field>
                        <label style={{color:'grey'}}>Your password</label>
                        <input type='password' placeholder='' />
                      </Form.Field>
                  </Form>
                  </div>
                  <br/>
                  <div className="Email">
                  <Form>
                      <Form.Field>
                        <label style={{color:'grey'}}>Your email</label>
                        <input  placeholder='' />
                      </Form.Field>
                  </Form>
                  </div>
                  <br/>
                  <div>
                    <Button compact size='small' color='black' type='submit'>Registration</Button>
                  </div>
                  <div>
                  <h2 style={{fontSize:'16px', marginTop:'20px', marginBottom:'16px'}}>Already have an account? <Login/> </h2>
                  </div>
                  <p style={style.p}>To make Medium work, we log user data and share it with service providers. Click "Sign Up" above to accept Medium's <a href="#" style={{color:'grey'}}><u>Terms of Service</u></a> & <a href="#" style={{color:'grey'}}><u>Privacy Policy</u>.</a></p>
                </div>
              </div>
              <div style={style.rightSide}>
                <img src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png" alt="website logo right"/>
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
  leftSide: {
    height:"550px",
    width:"214px",
  },
  middleSide: {
    height:"550px",
    width:"330px",
  },
  title: {
    textAlign: "center",
  },
  p: {
    fontSize: "12px",
    color: "grey",
    marginBottom: "40px",
  },
  rightSide: {
    height:"550px",
    width:"214px",
  },



}
