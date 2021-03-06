import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);

        this.state = { activeItem: 'home' };
    }


    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div className="page__header">
                <Menu size='small' stackable>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='courses' active={activeItem === 'courses'} onClick={this.handleItemClick} />
                    <Menu.Item name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick} />
                    <Menu.Item name='docs' active={activeItem === 'docs'} onClick={this.handleItemClick} />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}