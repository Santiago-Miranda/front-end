import {Link} from 'react-router-dom'
import './Style/LandingPage.css'

export default function LandingPage(){
    return(
        <div id='lp-container'>
            <h3>BIENVENIDO!</h3>
            <h1>RECETAS</h1>
            <Link to='/home'>
                <button>LETS GO!!!</button>
            </Link>
        </div>
        )
}
