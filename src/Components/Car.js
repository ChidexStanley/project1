import React from 'react';

export class Car extends React.Component {

constructor(props){
   super(props);
}

    render() {
        return (
            <div>
                <h1>Car Component</h1>
                <p>the color of my car is { this.props.color}</p>
            </div>
        )
    }
}