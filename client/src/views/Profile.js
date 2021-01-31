import React, { Component, useState } from 'react';
import { Header, Image, Segment, Card } from 'semantic-ui-react';
import './Profile.css'
export default class Profile extends React.Component {

    render() {

        return (
            <div className={'container1'}>
                <Header>
                    This is Profile
            </Header>
                <Card centered>
                <Card.Content header="John doe"/>
                <Image centered 
                        src={"https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon-715x715.png"}
                        size="medium"
                    />
                <Card.Content meta="Person"/>
                <Card.Description className={'descript'} content={(
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                )}/>

                </Card>

            </div>
        );
    }
}

