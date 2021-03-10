import React from 'react';
import { ListQuery } from '../../queries/queries/films';
import { useQuery } from '@apollo/react-hooks';
import Moment from 'react-moment';
import { Row, Col } from 'reactstrap';
import './list.css';

export default function List() {
    const { data, loading } = useQuery(ListQuery);

    return (
        <Row id="container-movies" className="pt-3">
            {!loading ?
                data.allFilms.films.map(it =>
                    <Col xs="12" sm="4" key={it.episodeID} className="container-movie">
                        <div className="movie">
                            <div className="movie-inside front">
                                <img alt={it.title} className='movie-image-list' src={require(`../../assets/${it.episodeID}.jpg`)} />
                            </div>
                            <div className="movie-inside back">
                                <div className="movie-details">
                                    <div className="movie-snap">
                                        <img alt={it.title} src={require(`../../assets/${it.episodeID}.jpg`)} />
                                    </div>
                                    <h1>{it.title} <br /><span><Moment format="DD/MM/YYYY">{it.createdAt}</Moment></span></h1>
                                    <p className="movie-synopsis">{it.openingCrawl}</p>
                                </div>
                            </div>
                        </div>
                    </Col>) : <Col><h1 className="text-light">Loading...</h1></Col>}
        </Row>
    );
}