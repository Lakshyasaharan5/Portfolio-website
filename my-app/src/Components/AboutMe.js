import '../Styles/Aboutme.css'
import { SocialIcon } from 'react-social-icons';
import Resume from '../Resume/LakshyaSaharanResume.pdf'

function Aboutme() {

    return <section class="section-about-me" id="about">
        <div class="about-me-heading">
            About Me
        </div>
        <div class="about-me-content">
            <div class="about-me-links">
                <ul>
                    <li><SocialIcon url="https://github.com/Lakshyasaharan5" target="_blank" /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/lakshya-saharan-8567611b1/" target="_blank" /></li>
                    <li><SocialIcon url="https://www.leetcode.com/lakshyasaharan/" target="_blank" /></li>
                </ul>
            </div>
            <div class="about-me-intro"> I am fast learner and can adapt based on company's requirement. I have good knowledge of Java Springboot and MERN</div>
            <a href={Resume} download="Resume.pdf" className='resumeButton'>Resume ⬇</a>
        </div>
    </section>
}

export default Aboutme;