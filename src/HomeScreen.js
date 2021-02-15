import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import "./HomeScreen.css";
import requests from './Requests';

function HomeScreen() {
    return (
        <div className='homescreen'>
            <Nav />

            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title="TRENDING NOW"
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title="TOP RATED"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
             />
            <Row 
                title="COMEDY MOVIES"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title="DOCUMENTARIES"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
