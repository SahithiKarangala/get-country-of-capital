import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].id,
  }

  changeCapital = event => {
    this.setState({countryId: event.target.value})
  }

  getAnswer = () => {
    const {countryId} = this.state

    const answerDetails = countryAndCapitalsList.find(
      each => each.id === countryId,
    )

    return answerDetails.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getAnswer()

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="selection-container">
            <select
              className="country-list"
              onChange={this.changeCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="answer">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
