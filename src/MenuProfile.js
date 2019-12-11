import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';

const trigger = (
  <span>
    <Image avatar size="mini" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-captions-1563551865.jpg?crop=0.668xw:1.00xh;0.199xw,0&resize=768:*" />
  </span>
)

const options = [
    <Image size="mini" marginLeft="5px" avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-captions-1563551865.jpg?crop=0.668xw:1.00xh;0.199xw,0&resize=768:*" />,
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
                 pointing='top left'
                 icon={null}/>
        </div>
      )
    };
  }
