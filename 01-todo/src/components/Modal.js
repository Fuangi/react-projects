function Modal(props){
    // to open the modal(the pop up)
    // cancel modal
    function cancleHandler(){
        props.onCancel()
    }
    function confirmHandler(){
        props.onConfirm()
    }
    console.log(props.onClick)
    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancleHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal;