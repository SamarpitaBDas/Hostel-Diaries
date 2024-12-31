import backgroundImage from '../assets/starting_screen.jpg';
import './styles.css'; 
import lvl_2 from '../assets/levels/lvl_2.png'

const Level = () => {
    return (
        <div 
            style={{
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
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'blur(10px)',
                    zIndex: -1,
                }}
            />
            <img
            src={lvl_2}
            />
        </div>
    );
};

export default Level;
