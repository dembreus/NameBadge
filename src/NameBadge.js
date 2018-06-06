import React from 'react'

class NameBadge extends React.Component {

    state = {
        name: '',
        site: '',
        twitter: '',
        areaCode: "",
        mid3Digits: "",
        last4Digits: ""
    }


    render() {

        console.log(this)
        console.log(this.props.name)
        console.log(this.state)

        return (
            <div>
                {/*ordered list of the items that need to be inserted*/}
                <ol>
                    {/*the name text box that inputs info onto the name badge*/}
                    <li><h3>Name</h3><input type="text"
                                            placeholder="First Name"
                                            value={this.state.name}
                                            onChange={e => this.setState({name: e.target.value})}
                    /></li>
                    {/*the input for the user's twitter account info*/}
                    <li><h3>twitter</h3><input type="text"
                                               placeholder="@example"
                                               value={this.state.twitter}
                                               onChange={e => this.setState({twitter: e.target.value})}
                    /></li>
                    {/*the input for the user's website info*/}
                    <li><h3>website</h3><input type="text"
                                               placeholder="www.example.com"
                                               value={this.state.site}
                                               onChange={e => this.setState({site: e.target.value})}
                    /></li>
                    {/*the input for the user's phone number. the user is only allowed to input numbers and*/}
                    {/*has a max length to those numbers*/}
                    <li>
                        <h3>Phone Number</h3>
                        {/*this is the input for the area code*/}
                        <input type="number"
                               placeholder="xxx"
                               value={this.state.areaCode}
                               maxLength={"3"}
                               onChange={e => this.setState({areaCode: e.target.value})}
                        />-
                        {/*this is the input for the next 3 digits in the phone number*/}
                        <input type="number"
                               placeholder="xxx"
                               value={this.state.mid3Digits}
                               maxLength="3"
                               onChange={e => this.setState({mid3Digits: e.target.value})}
                        />-
                        {/*this is the input for the last 4 digits of the phone number*/}
                        <input type="number"
                               placeholder="xxxx"
                               value={this.state.last4Digits}
                               maxLength={"4"}
                               onChange={e => this.setState({last4Digits: e.target.value})}
                        />
                    </li>
                </ol>
                {/*this is the displayed name badge that is put into a list */}
                <ul>
                    {/*this is the first part of the list that says "Hello My Name is..."*/}
                    <li>
                        <span>Hello</span>My Name is&hellip;
                    </li>
                    {/*this is the second part of the list that is where the name input is displayed*/}
                    <li className="name">
                        {this.state.name}
                    </li>
                    {/*this is the 3rd part of the list that displays the twitter input, the website input, and the phone number input*/}
                    <li>
                        {/*this is the twitter display*/}
                        <a href="/"
                           title='You should follow me on Twitter'>
                            {this.state.twitter}
                        </a> |
                        {/*this is the website display*/}
                        <a href="/"
                           title='My Pro site'>
                            {this.state.site}
                        </a> |
                        this is the phone number display.
                        <a href="/"
                           title='My Phone Number'>
                            {this.state.areaCode}-{this.state.mid3Digits}-{this.state.last4Digits}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NameBadge
