import React from 'react';
import { ListQuery } from '../../queries/queries/films';
import { useQuery } from '@apollo/react-hooks';

export default function List() {
    const { data, loading } = useQuery(ListQuery);
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
                    {!loading ?
                        data.allFilms.map((it) =>
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