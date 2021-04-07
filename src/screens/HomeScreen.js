import React from 'react'
import Banner from '../Banner'
import "./HomeScreen.css"
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="ACTIONS MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="ROMACNE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaryMovies} /> 
        </div>
    )
}
export default HomeScreen