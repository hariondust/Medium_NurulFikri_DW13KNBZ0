import React, {Component} from 'react';
import {Grid, Item, Image, Menu, Button, Container, Divider} from 'semantic-ui-react';


export default class CategoryFooter extends Component {
  render() {

    return (
      <Container>
        <Grid column={2}>
          <Grid.Row>
            <Grid.Column>
              <div className="footerText" style={{marginLeft:"15%", marginRight:"15%", marginTop:"2%"}}>
                <Item.Group>
                  <Divider/>
                  <Item textAlign="right" stretched style={{marginTop:"4%"}}>
                    <Item.Content>
                    <h2 as="head" style={{textAlign:"left", marginLeft:"10px"}}>{this.props.title}</h2>
                    <Item.Description style={{textAlign:"left", marginLeft:"10px"}}>
                      <p style={{fontSize:"20px"}}>{this.props.context}</p>
                      <a href="#">{this.props.writer}</a>
                      <p>{this.props.date}</p>
                    </Item.Description>
                    </Item.Content>
                      <Item.Image size="medium" src={this.props.img} style={{marginLeft:"20px"}} />
                    </Item>
                </Item.Group>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  };
}
