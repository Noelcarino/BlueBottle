import React from 'react';
import Header from './header/header';
import './app_styles.css';

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
            <div className="container">
                    <Header />
            </div>
        )
    }
}