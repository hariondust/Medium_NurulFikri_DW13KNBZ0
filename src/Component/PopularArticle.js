import React, {Component} from 'react';
import {Item, Icon, List, Sticky} from 'semantic-ui-react';

export default class PopularArticle extends Component {
    render() {
      const style = {
        writerName: {
          color: "black",

        },
        contentMain: {
          color: "grey",
          textAlign: "left",
        },
      }
      return(
        <Item.Group style={{paddingBottom:"0px", paddingTop:"10px"}}>
          <Item>
            <h1 style={{marginRight:"8px"}}>{this.props.number} </h1>
          <Item.Content>
            <Item.Header as="head" style={{textAlign:"left", marginLeft:"10px", paddingBottom:"0px"}}>{this.props.title}</Item.Header>
            <Item.Description style={{textAlign:"left", marginLeft:"10px"}}>
              <a href="#" style={style.writerName}>{this.props.writer}</a> in <a href="#" style={style.writerName}>{this.props.group}</a>
              <p style={style.contentMain}>{this.props.info} <Icon name="star" size="small"/></p>
            </Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
      )
    };
  }
