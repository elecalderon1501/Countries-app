import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
    return(
        <div className = "container">
            <h1> The World </h1>
            <Link to='/home'>
                <button className = "button-home"> Go!</button>
            </Link>
        </div>
    )
}