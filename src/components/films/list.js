import React from 'react';
import { ListQuery } from '../../queries/queries/films';
import { useQuery } from '@apollo/react-hooks';
import Moment from 'react-moment';
import './list.css';

export default function List() {
    const { data, loading } = useQuery(ListQuery);

    return (
        <>
            <div id="container-movies" className="pt-3 row">
                {!loading ?
                    data.allFilms.map(it =>
                        <div key={it.episode_id} className="container-movie col-sm-4">
                            <div className="movie">
                                <div className="movie-inside front">
                                    <img alt={it.title} className='movie-image-list' src={require(`../../assets/${it.episodeId}.jpg`)} />
                                </div>
                                <div className="movie-inside back">
                                    <div className="movie-details">
                                        <div className="movie-snap">
                                            <img alt={it.title} src={require(`../../assets/${it.episodeId}.jpg`)} />
                                        </div>
                                        <h1>{it.title} <br /><span><Moment format="DD/MM/YYYY">{it.createdAt}</Moment></span></h1>
                                        <p className="movie-synopsis">{it.openingCrawl}</p>
                                    </div>
                                </div>
                            </div>
                        </div>) : <div>loading</div>}
            </div>
        </>
    );
}