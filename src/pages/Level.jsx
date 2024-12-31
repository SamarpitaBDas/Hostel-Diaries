import backgroundImage from '../assets/starting_screen.jpg';
import './styles.css'; 

const Level = () => {
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
        </div>
    );
};

export default Level;

