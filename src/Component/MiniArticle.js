import React, {Component} from 'react';
import {Item, Icon} from 'semantic-ui-react';

export default class MiniArticle extends Component {
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
          <Item>
            <Item.Image size="tiny" src={this.props.img} />

          <Item.Content>
            <Item.Header as="tes">{this.props.title}</Item.Header>
            <Item.Description>
            <p style={style.contentMain}>{this.props.subtitle}</p>
              <a href="#" style={style.writerName}>{this.props.writer}</a> in <a href="#" style={style.writerName}>{this.props.group}</a>
              <p style={style.contentMain}>{this.props.info} <Icon name="star" size="small"/></p>
            </Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
      )
    };
  }
