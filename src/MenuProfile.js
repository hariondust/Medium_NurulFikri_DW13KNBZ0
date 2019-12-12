import React, { Component } from 'react';
import { Dropdown, Image, Grid } from 'semantic-ui-react';

const trigger = (
  <span>
    <Image avatar size="mini" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-captions-1563551865.jpg?crop=0.668xw:1.00xh;0.199xw,0&resize=768:*" />
  </span>
)

const options = [
      <Grid columns={2} style={{}}>
        <Grid.Row>
          <Grid.Column>
            <div className="headerLogo" style={{margin:"5%", width:"40px", height:"40px", paddingLeft:"0"}}>
              <Image size="tiny" avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-captions-1563551865.jpg?crop=0.668xw:1.00xh;0.199xw,0&resize=768:*" style={{width:"35px", height:"35px"}}></Image>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="headerTitle" style={{paddingLeft:"0px", textAlign:"left"}}>
            <Grid.Row>
              <span className="t1">Nurul Fikri</span>
            </Grid.Row>
            <Grid.Row>
                <span className="t2">@nfikrii</span>
            </Grid.Row>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  ,
    <Dropdown.Divider />,
    { key: 'newstory', text: 'New Story' },
    { key: 'mystory', text: 'Stories' },
    { key: 'serie', text: 'Series' },
    { key: 'status', text: 'Stats' },
    <Dropdown.Divider />,
    { key: 'partner', text: 'Medium Partner Program' },
    <Dropdown.Divider />,
    { key: 'help', text: 'Bookmarks' },
    { key: 'publication', text: 'Publications' },
    { key: 'interest', text: 'Customize your interests' },
    <Dropdown.Divider />,
    { key: 'profile', text: 'Profile' },
    { key: 'setting', text: 'Settings' },
    { key: 'help', text: 'Help' },
    { key: 'exit', text: 'Sign out'},
  ]

  export default class MenuProfile extends Component {

    render() {

      return (
        <div className="DropdownMenu">
          <Dropdown
                 trigger={trigger}
                 options={options}
                 pointing='top right'
                 icon={null}/>
        </div>
      )
    };
  }
