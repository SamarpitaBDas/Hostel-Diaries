import { useRef } from 'react'; // Import useRef
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
import { useNavigate } from 'react-router-dom'

const Level = () => {

    const navigate = useNavigate();

    const handleLevel1Click = () => {
        navigate('/level_1');
    };

    const handleLevel2Click = () => {
        navigate('/level_2');
    };

    const handleLevel3Click = () => {
        navigate('/level_3');
    };

    const handleLevel4Click = () => {
        navigate('/level_4');
    };

    const handleLevel5Click = () => {
        navigate('/level_5');
    };

    const handleLevel6Click = () => {
        navigate('/level_6');
    };

    const handleLevel7Click = () => {
        navigate('/level_7');
    };

    const handleLevel8Click = () => {
        navigate('/level_8');
    };


    const scrollContainerRef = useRef(null);
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, 
                behavior: 'smooth',
            });
        }
    };

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
                ref={scrollContainerRef}  
                style={{
                    display: 'flex',
                    overflowX: 'auto',   
                    padding: '40px',
                    gap: '40px',
                    justifyContent: 'flex-start', 
                    alignItems: 'center',
                    position: 'relative',
                    maxWidth: '90%',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                }}
            >
                <div style={{
                    marginLeft: '500px',   
                    marginRight: 'auto',  
                }}>
                    <img
                        src={lvl_1}
                        alt="Level 1"
                        style={{
                            width: '250px',
                            height: '250px',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                        }}
                        onClick={handleLevel1Click}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                </div>

                <img
                    src={lvl_2}
                    alt="Level 2"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel2Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_3}
                    alt="Level 3"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel3Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_4}
                    alt="Level 4"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel4Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_5}
                    alt="Level 5"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel5Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_6}
                    alt="Level 6"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel6Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_7}
                    alt="Level 7"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel7Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img
                    src={lvl_8}
                    alt="Level 8"
                    style={{
                        width: '250px',
                        height: '250px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                    }}
                    onClick={handleLevel8Click}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
            </div>

            <div 
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#fff',
                    zIndex: 1,
                }}
                onClick={scrollRight} 
            >
                ➡️
            </div>
        </div>
    );
};

export default Level;
