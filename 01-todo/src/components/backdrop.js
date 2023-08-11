function Backdrop(props){
    // to blur th page after the pop up and prevent interaction with it 
    console.log(props.onCancel)
    return(
        <div className='backdrop' onClick={props.onCancel}/>
        /* in jsx, an element can be wrritten as above if it doesn't have any content between it */
    )
}

export default Backdrop;