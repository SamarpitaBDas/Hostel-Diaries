import backgroundImage from '../assets/starting_screen.jpg';
import './styles.css'; 
import lvl_1 from '../assets/levels/lvl_1.png';
import lvl_2 from '../assets/levels/lvl_2.png';
import lvl_3 from '../assets/levels/lvl_3.png';
import lvl_4 from '../assets/levels/lvl_4.png';
import lvl_5 from '../assets/levels/lvl_5.png';
import lvl_6 from '../assets/levels/lvl_6.png';
import lvl_7 from '../assets/levels/lvl_7.png';
import lvl_8 from '../assets/levels/lvl_8.png';

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

            <div 
                style={{
                    display: 'flex',
                    overflowX: 'auto',     // Allows horizontal scrolling
                    padding: '20px',
                    gap: '20px',           // Space between level images
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Level Images */}
                <img
                    src={lvl_1}
                    alt="Level 1"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',  // Smooth scale effect
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';  // Enlarge image on hover
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';  // Reset size when hover ends
                    }}
                />
                <img
                    src={lvl_2}
                    alt="Level 2"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_3}
                    alt="Level 3"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_4}
                    alt="Level 4"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_5}
                    alt="Level 5"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_6}
                    alt="Level 6"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_7}
                    alt="Level 7"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
                <img
                    src={lvl_8}
                    alt="Level 8"
                    style={{
                        width: '150px',
                        height: '150px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                />
            </div>
        </div>
    );
};

export default Level;
