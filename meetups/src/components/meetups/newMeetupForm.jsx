import { useRef } from 'react';

import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm(props){
    const titleInputRef= useRef();
    const imageInputRef= useRef();
    const addressInputRef= useRef();
    const descriptionInputRef= useRef();

    function submitHandler(e){
        e.preventDefault(); //to stop it from reloading the page

        //to get the submitted we use refs (refrences) to get them from the dom
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descriptionInputRef.current.value;

        // getting and storing the gotten data from above in a object
        const meetupData ={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            desc: enteredDesc
        }

        props.onAddMeetup(meetupData);
        // to store it in a database by using firebase(come back to that vid portion)
    }
    return(
        <Card>
            {/* to listen for submission, use the onSubmit prop on the form */}
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor ='title'> Meetup Title </label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor ='image'> Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor ='address'> Meetup Address </label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor ='description'> Meetup Description </label>
                    <textarea required id="description" rows='5' ref={descriptionInputRef}> </textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm