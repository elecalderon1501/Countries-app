import { Link } from 'react-router-dom';

export default function Card ({id, flags, name, continent, area}){
    return(
        <div>
            <Link to = {`/details/${id}`}>
            <div>
                <img src={flags} alt={name} />
            </div>
            <div>
                <p>{name}</p>
                <p>{continent}</p>
                <p>{area}km²</p>
            </div>
            </Link>
        </div>
    );
};

