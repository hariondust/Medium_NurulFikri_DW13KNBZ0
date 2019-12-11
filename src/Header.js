import React, {Component} from 'react';
import { Menu, Grid, Input, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Register from './Register';
import MenuProfile from './MenuProfile';

export default class Header extends Component {

  render() {

    return (
      <div className="pageHeader">
      <Grid>
        <Grid.Column>
          <Menu secondary>
            <Menu.Menu>
              <Menu.Item>
                <h2 style={{fontFamily:"Myriad Pro Regular"}}> Medium </h2>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
              <Menu.Item>
                <Icon color='grey' name='search' size='large' />
              </Menu.Item>
              <Menu.Item>
                <Icon color='outline' name='bell' size='large' />
              </Menu.Item>
              <Menu.Item>
                <Register/>
              </Menu.Item>
              <Menu.Item>
                <MenuProfile/>
              </Menu.Item>
          </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
      </div>
    )
  };
}
