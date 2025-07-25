
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const title = "AD FLIX";
    const container = document.querySelector('.title-container');

    const html = [...title].map((letter) =>
      letter === " "
        ? `<span class="letter space">&nbsp;</span>`
        : `<span class="letter">${letter}</span>`
    ).join('');

    container.innerHTML = html;

    // Pulsate animation for each letter
    import('gsap').then(({ default: gsap }) => {
      gsap.to('.letter', {
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        duration: 0.7,
        ease: "power1.inOut"
      });
      // Slide in subtitle
      gsap.fromTo(
        '.hero-subtitle',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 0.85, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    });
  }, []);

  return (
    <div className="hero-section">
      <div className="title-container" />
      <div className="hero-content">
        <p className="hero-subtitle">Searchable streaming commercials to help you shop.....
          COMING FALL 2025
        </p>
        <div className="features-container">
          <div className="feature-card">
            <h3>Browse Commercials</h3>
            <ul>
              <li>Personalized Recommendations</li>
              <li>Advanced Filters</li>
              <li>Watchlist</li>
              <li>Engagement Metrics</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Get the Latest Commercials</h3>
            <ul>
              <li>View Latest Additions</li>
              <li>Trending Now</li>
              <li>Notifications</li>
              <li>Curated Playlists</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Watch Online to Help Shopping</h3>
            <ul>
              <li>Detailed Product Information</li>
              <li>Interactive Elements</li>
              <li>User Reviews and Ratings</li>
              <li>Compare Products</li>
            </ul>
          </div>
        </div>
        <div className="hero-enter">
          <a href="/home.html" className="enter-btn">ENTER</a>
        </div>
      </div>
    </div>
  )
}
export default App