import {useContext} from 'react'

import FavContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage(){
    const FavCtx = useContext(FavContext)

    // remeber to update this and store favorites either in locla storage or on a server
    let content;

    if(FavCtx.totalFavorites === 0){
        content = <p> You got no favovites yet. Start adding some </p>
    }else{
        content = <MeetupList meetups = {FavCtx.favorites} />
    }
    return(
        <section> 
            <h1>My Favorites </h1>
            {content}
        </section>
    )
}

export default FavoritesPage;