import { Component } from "react";

export default class HigherOrderFunction extends Component {
    constructor() {
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </div>
        ));
        return mapRows;
    }

    renderFilteredItems = () => {
        const data = this.state.userData

        const filteredUserData = data.filter((el) => {
            return el.user_type == "Designer"
        })

        const mapRow = filteredUserData.map((item) => {
            return (
                <div key={item.id}>
                    <li className="list-elements">
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </div>
            )
        })

        return mapRow
    }

    renderUserWithJ = () => {
        const data = this.state.userData

        const filteredUserData = data.filter((el) => el.name.startsWith("J"))

        return filteredUserData.map((item) =>
        (
            <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </div>
        )
        )
    }

    renderByAge = () => {
        const data = this.state.userData
        return data.filter((el) => el.age > 28 && el.age <= 50).map((item) => (
            <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </div>
        ))
    }

    renderYearsOfDesigners = () => {
        const data = this.state.userData
        return data.filter((el) => el.user_type == "Designer").reduce((total, el) => {
            return total.years + el.years
        })
    }

    render() {
        return (
            <>
                <h1>Higher Order function</h1>
                <div>
                    <h2>Display all items</h2>
                    <div className="display-box">
                        <ul>{this.renderItems()} </ul>
                    </div>
                </div>
                <div>
                    <h2>Display based on User Type</h2>
                    <div className="display-box">
                        <ul>{this.renderFilteredItems()} </ul>
                    </div>
                </div>
                <div>
                    <h2>Filter all data starting with J</h2>
                    <div className="display-box">
                        <ul>{this.renderUserWithJ()} </ul>
                    </div>
                </div>
                <div>
                    <h2>Filter all data based on age greater than 28 and age less than or equals to 50</h2>
                    <div className="display-box">
                        <ul>{this.renderByAge()} </ul>
                    </div>
                </div>
                <div>
                    <h2>Find the total years of the designers</h2>
                    <div className="display-box">
                        <ul>{this.renderYearsOfDesigners()} </ul>
                    </div>
                </div>
            </>
        )
    }
}
