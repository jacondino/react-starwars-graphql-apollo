import React from 'react';
import { graphql } from 'react-apollo';
import { ListQuery } from '../../queries/queries/films';

export function List(props) {
    return (
        <div className="container">
            <h1>List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Filme</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {!props.listFilms.loading ?
                        props.listFilms.allFilms.map((it) =>
                            <tr key={it.id}>
                                <td>{it.title}</td>
                                <td>
                                    <button className="btn btn-success">Editar</button>
                                    <button className="btn btn-danger ml-2">Excluir</button>
                                </td>
                            </tr>
                        ) :
                        <tr><td>Loading...</td><td></td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default graphql(ListQuery, { name: 'listFilms' })(List);