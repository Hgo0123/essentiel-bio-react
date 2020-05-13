import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

//FIREBASE 
import firebase from 'firebase/app'
import base, { firebaseApp } from './base'

import pass from './pass'
import './App.css';
import './components/Card.scss'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Admin from './components/Admin';
import Footer from './components/Footer';



class App extends Component {
  state = {
    fruits: {},
    legumes: {},
    goToFruits: false,
    goToLegumes: false,
    showInput: false,
    userInput: '',
    password: ''
  }
  componentDidMount() {
    this.ref = base.syncState(`/fruits`, {
      context: this,
      state: 'fruits'
    })
    this.ref = base.syncState(`/legumes`, {
      context: this,
      state: 'legumes'
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }


  goToFruits = (event) => {
    event.preventDefault()
    this.setState({
      goToFruits: true
    })
  }
  goToLegumes = (event) => {
    event.preventDefault()
    this.setState({
      goToLegumes: true
    })
  }

  showInput = (event) => {
    event.preventDefault()
    let showInput = !this.state.showInput
    this.setState({
      showInput: showInput
    })
  }

  addFruits = (fruit) => {
    const fruits = { ... this.state.fruits }
    fruits[`fruits-${Date.now()}`] = fruit
    this.setState({
      fruits: fruits
    })
  }
  addLegumes = (legume) => {
    const legumes = { ... this.state.legumes }
    legumes[`legumes-${Date.now()}`] = legume
    this.setState({
      legumes: legumes
    })
  }
  handleChange = (event) => {
    const userInput = event.target.value
    this.setState({
      userInput: userInput
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const userInput = this.state.userInput
    this.setState({
      password: userInput
    })
  }
  suppFruits = (key) => {
    const fruits = { ... this.state.fruits }
    fruits[key] = null
    this.setState({
      fruits: fruits
    })
  }

  suppLegumes = (key) => {
    const legumes = { ... this.state.legumes }
    legumes[key] = null
    this.setState({
      legumes: legumes
    })
  }
  render() {

    if (this.state.goToFruits) {
      return <Redirect push to={{
        pathname: '/fruits',
        state: { fruits: this.state.fruits, legumes: this.state.legumes }
      }}></ Redirect>
    }

    if (this.state.goToLegumes) {
      return <Redirect push to={{
        pathname: '/legumes',
        state: { legumes: this.state.legumes, fruits: this.state.fruits }
      }}></ Redirect>
    }

    const cardFruits = Object.keys(this.state.fruits).slice(0, 5).map(item => (
      <Card key={item} nom={this.state.fruits[item].nom} origine={this.state.fruits[item].origine} prix={this.state.fruits[item].prix} image={this.state.fruits[item].image} />
    ))
    const cardLegumes = Object.keys(this.state.legumes).slice(0, 5).map(item => (
      <Card key={item} nom={this.state.legumes[item].nom} origine={this.state.legumes[item].origine} prix={this.state.legumes[item].prix} image={this.state.legumes[item].image} />
    ))


    return (
      <div>
        <Header goToFruits={this.goToFruits} goToLegumes={this.goToLegumes} />
        <Hero />
        <div className='cards'>
          <div className='header'>
            <p>Nos fruits</p>
            <p className='link' onClick={this.goToFruits}>Voir plus >></p>
          </div>
          <div className='cards'>
            {cardFruits}
          </div>
        </div>
        <div className='cards'>
          <div className='header'>
            <p>Nos Legumes</p>
            <p className='link' onClick={this.goToLegumes}>Voir plus >></p>
          </div>
          <div className='cards'>
            {cardLegumes}
          </div>
        </div>
        <Footer showInput={this.showInput} />
        {this.state.showInput ? <div className='connexionBox'>
          <form className='connexion' onSubmit={this.handleSubmit}>
            <input
              onKeyPress={this.handleKeyPress}
              value={this.state.userInput}
              onChange={this.handleChange}
              type='password'
              placeholder='Mot de passe'
              required />
            <button type='submit'>GO</button>
          </form>
        </div> : null}
        {this.state.password === pass ? <Admin addLegumes={this.addLegumes} addFruits={this.addFruits} fruits={this.state.fruits} legumes={this.state.legumes} suppFruits={this.suppFruits} suppLegumes={this.suppLegumes} /> : null}
      </div >
    )
  }
}

export default App;
