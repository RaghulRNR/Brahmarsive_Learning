import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';
import { Paginate } from '../utils/paginate';
import '../services/fakeMovieServices'
import './common/like'
import Like from './common/like';
import Pagination from './common/pagination';
class Movies extends Component {
    state = { 
        movies:getMovies(),
        pageSize:2,
        currentPage:1
     } 
    render() { 
        if(this.state.movies.length===0){
            return <p>No Movies in Database</p>
           
        }
        const movies=Paginate(this.state.movies,this.state.currentPage,this.state.pageSize)
        console.log(movies)
        return (
            
        <React.Fragment>
            <p>{this.state.movies.length}  Movies in Databases</p>
             <main role="main" class="container">
             <table class="table ">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
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
                    <td><Like  onClick={()=>this.handleLike(movie)} liked={movie.like} /></td>
                    <td><button className='btn btn-danger' onClick={()=>this.handleDelete(movie._id)}>Delete</button></td>
                    
                    </tr>
                    )}
                    
                    
                </tbody>
            </table>
            <Pagination 
            count={this.state.movies.length} 
            pageSize={this.state.pageSize}
            paginationClick={this.handlePagination}
            currentPage={this.state.currentPage}
            />
             </main>
        </React.Fragment>
        
        );
    }
    handlelikehere=(like)=>{
        console.log(document.getElementById("like").className)
        document.getElementById("like").className==="fa fa-heart-o"?document.getElementById("like").className="fa fa-heart":document.getElementById("like").className="fa fa-heart-o"
        console.log("like")
    }
    handleLike=(movie)=>{
        //console.log('Like')
        const movies=[...this.state.movies]
        const index=movies.indexOf(movie)
       /// movies[index]={...movies[index]}
        movies[index].like=!movies[index].like
        this.setState({movies})

        
    }
    handleDelete= (id)=>
    {
        console.log(id)
        const movies=this.state.movies.filter(m =>m._id!== id)
        this.setState({movies})
        
        
    }
    handlePagination=(page)=>{
       this.setState({currentPage:page})
    }
}
 
export default Movies;