import React from 'react';
import { Button } from 'react-bootstrap';

export default function New(props) {
    return (
        <div>
            <p> this is my first component</p>
            <p>hey i love what i am doing</p>
            <p>my name is {props.name}</p>
            <p>i am {props.number} years old</p>

            <Button variant="contained" color="success">
                Success
            </Button>
        </div>
    )
}
