import React, { Component, useState } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class Home extends React.Component {

    render() {
        const recepies = ["red", "blue", "green", "yellow"]
        return (
            <div>
                <Header>
                    Whats on your mind
            </Header>
                <Segment>

                    {recepies.map((recepie) => {
                        <h2 className="text">{recepie}</h2>
                    })}


                </Segment>
            </div>
        );
    }
}


// export default Home;