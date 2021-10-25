import React , {useState} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:"https://wallpaperhook.com/wp-content/uploads/2021/05/Elon-Musk-Wallpaper-HD-24-From-WallpaperHook.com-For-Free-scaled.jpg",
        },
        {
            name: 'Jeff Bezos',
            url:"https://i.pinimg.com/originals/8a/f5/26/8af526b5bd338af8feb079053312defa.jpg"
        }
    ]) ;

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen! " );
    };


    return (
        <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    {people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up','down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={ () => outOfFrame(person.name)}
                        >

                            <div
                                style= { {backgroundImage: `url(${person.url})` }}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>       
                    ))}
                </div>
                
            
        </div>
    )
}

export default TinderCards
