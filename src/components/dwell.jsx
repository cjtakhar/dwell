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
                    <p className="dwell-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eget nunc. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eget nunc.</p>
                </div>
                <div className="dwell-image">
                    <Link to="/listings">
                    <button className="dwell-button" >get started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dwell;