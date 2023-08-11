import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react'
// to prevent the infinite loop that the useState will cause for fetching, we use the useEffect component which allows for some code to be run under some conditions

// to get dummy meetups to use in this project
const Dummy_data = [
    {
        id: 'm1',
        title: 'First meetup',
        image: '',
        address: ' Down Beach',
        description: 'Have dinner with me'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: '',
        address: ' Down Beach',
        description: 'Have dinner with me again'
    }
]
function AllMeetUpsPage(){
    const [isLoading, setIsLoading] = useState(true) 
    const [loadedMeetups, setLoadedMeetups] = useState([])
    // sending a request to get data from database and display n the webpage

    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-getting-started-64e11-default-rtdb.firebaseio.com/meetups.json ' // https://first-react-input-default-rtdb.firebaseio.com/meetups.json
        ).then(response => {
           return  response.json()
        }).then(data => {
            const meetups = []
    
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                    // ... is the spread operator that copies every key value pair into an array as used above
                }
                meetups.push(meetup);
            }
            // getting the returned data from the db and getting their pks
    
            setIsLoading(false)
            setLoadedMeetups(meetups)
        })
    }, [])
    // ?it takes 2 args, a function as first and an array of dependencies next. If the array is empty, the func will be executed only the first tiime the component is executing
    // the array is supposed to contain all external factos that the function before it needs to execute(props or components), in this case, nothing

    if(isLoading){
        return(
            <section>
                <h1>Loading...</h1>
            </section>
        )
    }
    return(
        <section>
            <h1>All Meetups</h1>

            <MeetupList meetups={loadedMeetups}/>
           
        </section>
    )
}

export default AllMeetUpsPage;