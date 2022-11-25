import '../Styles/Footer.css'

function Footer(){

    const d = new Date(); 
    const currentYear = d.getFullYear(); 

    return <footer>
      <p>Copyright {currentYear}, Lakshya Saharan</p>
    </footer>
}

export default Footer;