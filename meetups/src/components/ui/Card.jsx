import classes from './Card.module.css'

function Card(props){
    return(
        <div className={classes.card}>
            {props.children}
            {/* used to pass a bunch of code to a component wraping around it */}
        </div>
    )
}
export default Card;