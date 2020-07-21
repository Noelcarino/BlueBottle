import React from 'react';

export default class App extends React.Component {
    componentDidMount(){
        fetch('/api/index.php',{
            headers: {
                'Content-Type': 'applicaton/json',
                'Accept': 'application/json'
        }})
        .then(res => res.text())
        .then(res => {
            console.log(res);
        })
    }
    render(){
        return (
            <h1>
                Blue Bottle
            </h1>
        )
    }
}