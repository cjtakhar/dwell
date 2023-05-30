import { Link } from 'react-router-dom';
import './styles/dwell.css'

const Dwell = () => {
    return (
        <div className="dwell-container">
            <div className="dwell-header">
                <h1 className="dwell-title">dwell.</h1>
                <h2 className="dwell-subtitle">a place to call home.</h2>
            </div>
            <div className="dwell-body">
                <div className="dwell-text">
                    <p className="dwell-paragraph">We all deserve a sanctuary. A haven that nurtures your dreams and aligns you with with your authentic self. Where connections are formed and collective experiences enrich our existence. Discover who you are and where you belong.</p>
                    <p className="dwell-paragraph">Find your place in the world.</p>
                </div>
                <div className="dwell-image">
                    <Link to="/login">
                    <button className="dwell-button" >get started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dwell;