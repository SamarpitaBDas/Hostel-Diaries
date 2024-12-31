import Play from '../components/play';
import backgroundImage from '../assets/starting_screen.jpg';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const HomePage = () => {

    const navigate = useNavigate(); 

    const handlePlayClick = () => {
        navigate('/level');  
    };

    return (
        <div 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                position: 'relative', 
            }}
        >
            <header style={{
                position: 'absolute', 
                fontFamily: 'ITCBenguiat', 
                color: '#d0a933',
                fontSize: '70px', 
                top: '460px', 
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                HOSTEL <br/>DIARIES
            </header>
            <div style={{ marginTop: '470px' }}>
                <Play onClick={handlePlayClick}  />
            </div>
        </div>
    );
};

export default HomePage;

