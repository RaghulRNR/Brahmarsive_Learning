import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';
import { Paginate } from '../utils/paginate';
import '../services/fakeMovieServices'
import './common/like'
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { Getgenres } from '../services/fakeGenreServices';
import MoviesTable from './MoviesTable';
import _ from 'lodash';
class Movies extends Component {
    state = { 
        movies:[],
        genre:[],
        pageSize:5,
        currentPage:1,
        sortColumn:{path:"title",order:"asc"}
     } 
     componentDidMount(){
        const genre=[{name:'AllMovies'},...Getgenres()]
        this.setState({movies:getMovies(),genre:genre})
        console.log('test')
     }
    render() { 
        if(this.state.movies.length===0){
            return <p>No Movies in Database</p> }
        const filtered=this.state.selectedGenre &&this.state.selectedGenre._id ?this.state.movies.filter(m=>m.genre.name===this.state.selectedGenre.name):this.state.movies        
        //console.log("Filtered Movies",filtered)
        const sorted= _.orderBy(filtered,[this.state.sortColumn.path],[this.state.sortColumn.order]);
        //console.log("Sorted movies",sorted)
        const movies= Paginate(sorted,this.state.currentPage,this.state.pageSize)

        return (
            
        <React.Fragment>
            <div className='row'>
                <div className='col-2'>
                    <ListGroup 
                        items={this.state.genre} 
                        handleGenre={this.handleListGroup} 
                        selectedGenre={this.state.selectedGenre}
                        isenable={true} 
                    />
                </div>
                <div className='col'>
                    <p>{filtered.length}  Movies in Databases</p>
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        sortColumn={this.state.sortColumn}
                    />
                    <Pagination 
                        count={filtered.length} 
                        pageSize={this.state.pageSize}
                        paginationClick={this.handlePagination}
                        currentPage={this.state.currentPage}
                    />
                </div>
            </div>
            
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
    handleListGroup=(genre)=>{
        console.log(genre)
        this.setState({selectedGenre:genre,currentPage:1})
    }
    handleSort=(sortColumn)=>{
        
        this.setState({sortColumn});
    }
}
 
export default Movies;
