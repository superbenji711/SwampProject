import './Header.css'
const Header = (props) => {
    return (
        <header id="Header">
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Recipes",
}

export default Header
