import AnimalCard from './AnimalCard';

const AnimalsList = ({ arrayChoice }) => {
    return (
        <div className="cards-list">
            { arrayChoice.map(animal => <AnimalCard animalInfo={animal} key={animal.name} />) }
        </div>
    )
}

export default AnimalsList;