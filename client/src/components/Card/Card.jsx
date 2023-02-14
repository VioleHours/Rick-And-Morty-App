import './Card.css'; 

export default function Card (props) {
    return (
        <div className='cardContainer'>
            <button className='button' onClick={props.onClose}>
                <span className='x'>X</span>
            </button>
            <h2 className='name'>{props.name}</h2>
            <img className='photoCharacter' src={props.image} alt='' />
            <div className='columns'>
            <h3 className='description'>{props.species}</h3>
            <h3 className='description'>{props.gender}</h3>
            </div>
        </div>
    );
}