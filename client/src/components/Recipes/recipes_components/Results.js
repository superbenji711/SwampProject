import React,{Component, useState} from 'react'
import { Grid, Image, Card, Icon, Search, Header, Segment } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

import './Results.css'

const Results = () => {

    const list = [
        {
            "name": "Leia Burger",
            "ingredients": ["cheese", "meat"],
            "id": 1
        },
        {
            "name": "Luke Burger",
            "ingredients": ["tomato", "meat", "lettuce"],
            "id": 2
        },
        {
            "name": "Ham Solo Burger",
            "ingredients": ["bacon", "cheese", "meat"],
            "id": 3
        },
        {
            "name": "Double Ham Solo",
            "ingredients": ["bacon", "cheese", "meat", "cheese", "meat"],
            "id": 4
        },
        {
            "name": "All-green Yoda Burger",
            "ingredients": ["cheese", "tomato", "cucumber", "lettuce"],
            "id": 5
        },
        {
            "name": "The Chewbacca",
            "ingredients": ["tomato", "cucumber", "cheese", "meat", "meat", "meat"],
            "id": 6
        },
        {
            "name": "Darth Vader Burger",
            "ingredients": ["tomato", "cucumber", "bacon", "cheese", "meat", "lettuce"],
            "id": 7
        },
        {
            "name": "The Emperor",
            "ingredients": [
                "bacon",
                "cheese",
                "meat",
                "bacon",
                "cheese",
                "meat",
                "bacon",
                "cheese",
                "meat"
            ],
            "id": 8
        }
    ]

    const [text, setText] = useState("");
    return (
        <div>
            <div>
            <Input value={text} onChange={(text)=>setText(text.target.value)}/>
                
                {console.log(text)}
            </div>
            <div>
                <Grid centered={true}>
                <Grid.Row columns={3}>
                    {list.map((recipe, i) => (
                            <Grid.Column >
                                <Card.Group>
                                    <Card centered key={i}>
                                        <Card.Content header={recipe.name} />
                                        {/* <Image src={"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"}
                                            size='medium' centered ></Image> */}
                                        <div className="card">

                                            <Card.Description textAlign={true} content={recipe.ingredients.map((ingredient, i) => (
                                                <div>{i + 1 + ". "}{ingredient}</div>
                                            ))} />

                                        </div>
                                    </Card>
                                </Card.Group>
                            </Grid.Column>
                    ))}
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default Results;