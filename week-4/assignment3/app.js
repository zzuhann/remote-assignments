let { innerWidth: width } = window;

class Header extends React.Component {
    state = {
        message: 'Welcome Message',
        display: 'none',
        right: '-50%',
    }

    changeText = () => {
        this.setState({
            message: 'Have a Good Time!'
        })
    }

    showMenu = () => {
        document.body.style.overflow = 'hidden';
        this.setState({
            display: 'block',
            right: '0',
        })
    }

    hideMenu = () => {
        document.body.style.overflow = 'scroll';
        this.setState({
            display: 'none',
            right: '-50%'
        })
    }

    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <div className="logo">
                        <a href="#">
                            <h1>Website Title</h1>
                        </a>
                        <img src='img/black-cat.png' alt="cat-logo" className="logo-img" />
                    </div>
                    <img src="img/menu.png" className="menu-img" id="menu-img" alt="navbar" onClick={this.showMenu} />
                    <ul className="menu" style={{ right: `${this.state.right}` }}>
                        <div className="close-menu" id="close-menu" style={{ display: `${this.state.display}` }} onClick={this.hideMenu}>X</div>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                    </ul>
                </div>
                <div className="banner">
                    <p id="banner-text" onClick={this.changeText}>{this.state.message}</p>
                </div>
            </div>
        )
    }

}

const MainTitle = () => {
    return (
        <h2>Welcome!</h2>
    )
}

class Main extends React.Component {

    state = {
        style: 'none'
    }

    toggleBoxes = () => {
        if (this.state.style === 'none') {
            let { innerWidth: width } = window;
            if (width >= 500) {
                this.setState({
                    style: 'flex'
                })
            } else {
                this.setState({
                    style: 'block'
                })
            }
        } else {
            this.setState({
                style: 'none'
            })
        }

    }

    render() {

        return (
            <div className="main">
                <div className="top-box main-box">
                    <div className="content-box mr-10 mr-20">Content Box 1</div>
                    <div className="content-box">Content Box 2</div>
                    <div className="content-box mr-10 mr-20">Content Box 3</div>
                    <div className="content-box">Content Box 4</div>
                </div>
                <div className="btn" id="callToAction" onClick={this.toggleBoxes}>Call to Action</div>
                <div className="bottom-box main-box" id="bottomBox" style={{ display: `${this.state.style}` }}>
                    <div className="content-box mr-10 mr-20">Content Box 5</div>
                    <div className="content-box">Content Box 6</div>
                    <div className="content-box mr-10 mr-20">Content Box 7</div>
                    <div className="content-box">Content Box 8</div>
                </div>
            </div>
        )
    }
}

const Footer = () => {
    return (
        <footer className="footer">Keep a cat as soon as possible! &copy; 2022</footer>
    )
}

class App extends React.Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <MainTitle />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);