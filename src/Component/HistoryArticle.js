import React, {Component} from 'react';
import {Item, Icon, List, Sticky} from 'semantic-ui-react';

export default class HistoryArticle extends Component {
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
        <Item.Group>
          <Item textAlign="right" stretched>
          <Item.Content>
            <h2 as="head" style={{textAlign:"left", marginLeft:"10px"}}>{this.props.title}</h2>
            <Item.Description style={{textAlign:"left", marginLeft:"10px"}}>
              <p>{this.props.subtitle}</p>
              <a href="#" style={style.writerName}>{this.props.writer}</a> in <a href="#" style={style.writerName}>{this.props.group}</a>
              <p style={style.contentMain}>{this.props.info} <Icon name="star" size="small"/></p>
            </Item.Description>
          </Item.Content>
            <Item.Image size="small" src={this.props.img} style={{textAlign:"right"}} />
        </Item>
        </Item.Group>
      )
    };
  }
