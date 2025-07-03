"use client";
import { useRouter } from 'next/navigation';
import './page.scss';
import '../layout.scss';

function HomePage() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/venue/list');
    };

    return (
        <div className="layout">
            <div className='homePage'>
                <div className='textContainer'>
                    <div className='wrapper'>
                        <h1 className='title'>Find your dream wedding venue</h1>
                        <p>
                            Planning your dream wedding starts with choosing the right venue. Our wedding venue filter page is designed to simplify your search, helping you discover the ideal location that matches your vision and requirements.
                        </p>
                        <button className='exploreButton' onClick={handleButtonClick}>
                            Explore Venues
                        </button>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img src="/mainvenue.jpg" alt="Main Venue" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;