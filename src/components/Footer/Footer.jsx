import './styles.css'
const Footer = () => {
const year  = new Date().getFullYear();
  return (
    <footer>
    © {year} By Nayana Sonawane
    </footer>
  )
}

export default Footer