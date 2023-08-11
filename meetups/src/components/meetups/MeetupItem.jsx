import {useContext} from 'react'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavContext from '../../store/favorites-context'

// Don't forget to add those images back again (uncomment the line below)
function MeetupItem(props){
    const favCtx = useContext(FavContext)
    const itemIsFav = favCtx.itemIsFav(props.id)
    function toggleFavHandler(){
        if(itemIsFav){
            favCtx.removeFav(props.id)
        }else{
            favCtx.addFav({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return(
        <li className = {classes.item}>
            <Card>
            <div className = {classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className = {classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className = {classes.actions}>
                <button onClick={toggleFavHandler}>{itemIsFav? 'Remove from Favorites': 'To favorites'}</button>
            </div>
        </Card>
        </li>
    )
}

export default MeetupItem