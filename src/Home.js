import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import apis from './Api'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            genres: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        apis.loadGenres()
            .then((res) => {
                console.log(res);
                this.setState({
                    isLoading: false,
                    genres: res.data
                })
            })
    }

    renderGenreLink(genre) {
        return (
            <span key={genre}>&nbsp;<Link to={`/series/${genre}`}>{genre}</Link>&nbsp;</span>
        )
    }

    render() {
        return (
            <div>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><img src="images/logo.png" /></h1>
                                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {
                        this.state.isLoading &&
                        <div> Aguarde, carregando...</div>
                    }
                    {!this.state.isLoading &&
                        <div>
                            Ver séries do genêro:
                        {this.state.genres.map(this.renderGenreLink)}
                        </div>
                    }
                </section>
            </div>
        )
    }
}

export default Home;