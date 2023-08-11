import NewMeetupForm from "../components/meetups/newMeetupForm";
import {useNavigate} from 'react-router-dom'
// to get the user's history and use it for feedback after they submit the form

function NewMeetupsPage(){
    const history = useNavigate()
    function addMeetupHandler(meetupData){
        // send the request to the api
        fetch('https://react-getting-started-64e11-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
                // to tell the api that the request carries json data
            }
        } ).then(() => {
            history('/')
        });
        // ?fetch takes the url to send to as first arg, and 
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;
