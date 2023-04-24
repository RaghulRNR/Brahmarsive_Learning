import Like from './common/like';
import React, { Component } from 'react';

class MoviesTable extends Component {
    raiseSort=(path)=>{
    console.log(path)
    const sortColumn={...this.props.sortColumn}
    if (sortColumn.path===path){
        sortColumn.order= sortColumn.order==="asc"?"desc":"asc"
        //console.log("if"+sortColumn.order)
    }
    else{
        sortColumn.path=path
        sortColumn.order="asc"
        //console.log(sortColumn.path)
        //console.log(sortColumn.order)
    }
    ///console.log(sortColumn)
    this.props.onSort(sortColumn)
    }
    render() { 
        const {movies,onLike,onDelete}=this.props;
        
        return ( 
            <table class="table ">
            <thead>
                <tr>
                <th onClick={() =>this.raiseSort("title")} scope="col">Title</th >
                <th onClick={() =>this.raiseSort("genre.name")} scope="col">Genre</th >
                <th onClick={() =>this.raiseSort("numberInStock")} scope="col">Stock</th >
                <th onClick={() =>this.raiseSort("dailyRentalRate")} scope="col">Rate</th >
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie  => 
                <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like  onClick={()=>onLike(movie)} liked={movie.like} /></td>
                <td><button className='btn btn-danger' onClick={()=>onDelete(movie._id)}>Delete</button></td>
                
                </tr>
                )}
                
                
            </tbody>
        </table>
        );
       
    }

} 
export default MoviesTable;