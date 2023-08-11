import { createContext, useState } from 'react';
// context as above is used to manage a global state of the project (app) being built.

const FavContext = createContext( {
    favorites: [],
    totalFavorites: 0,
    addFav: (favoriteMeetup) => {},
    removeFav: (meetupId) => {},
    itemIsFav: (meetupId) => {}
});
// it takes a value which represents the initial state of the application and can be an obj

export function FavContextProvider(props){
    // to rpovide the state and update the fav value

    const [userFav, setUserFav] = useState([])

    function addFavHandler(favoriteMeetup){
        setUserFav((prevUserFav) =>{
            return prevUserFav.concat(favoriteMeetup)
        });
    }

    function removeFavHandler(meetupId) {
        setUserFav(prevUserFav => {
            return prevUserFav.filter(meetup => meetup.id !== meetupId)
            // filter returns a new array where items can be filtered
        })
    }

    function itemIsFavHandler(meetupId) {
        return userFav.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFav,
        totalFavorites: userFav.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        itemIsFav: itemIsFavHandler
    } //to update context in all components

    return (
        <FavContext.Provider value={context}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavContext