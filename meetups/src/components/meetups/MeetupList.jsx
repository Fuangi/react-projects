import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'
import pic from '../../pages/Pic4.jpg'


function MeetupList(props){
    return(
        <ul className={classes.list}>
            { props.meetups.map(meetup =>
                 <MeetupItem 
                 key={meetup.id} 
                 id={meetup.id} 
                 image={meetup.image} 
                 title={meetup.title}
                 address={meetup.address}
                 description={meetup.description}
                 />)}

            {/* creating a list of meetups from the meetup items */}
        </ul>
    )
}

export default MeetupList;