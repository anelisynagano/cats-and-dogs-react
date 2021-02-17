import { Component } from 'react';
import Title from './components/Title';
import Dropdown from './components/Dropdown';
import AnimalsList from './components/AnimalsList';
import './App.css';

const animals = [
  {
    type: 'cat',
    name: 'Kandy',
    imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
  },
  {
    type: 'cat',
    name: 'Sir John II',
    imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
  },
  {
    type: 'dog',
    name: 'Bill',
    imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
  },
  {
    type: 'dog',
    name: 'Shawna',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
  },
];



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: 'All'
    }
  }

  handleAnimalSelection = (event) => {
    this.setState({ userSelection: event.target.value })
  }

  arrayChoice = () => {
    const { userSelection } = this.state;
    if (userSelection === 'All') {
      return animals
    } else if (userSelection === 'Cats'){
      return animals.filter(animal => animal.type === 'cat')
    } else {
      return animals.filter(animal => animal.type === 'dog')
    }
  }

  render() {

    return (
      <>
        <Title pageTitle="React Cats and Dogs" />
        <Dropdown handleSelect={this.handleAnimalSelection} />
        <AnimalsList arrayChoice={this.arrayChoice()} />
      </>
    );
  }
}

export default App;
