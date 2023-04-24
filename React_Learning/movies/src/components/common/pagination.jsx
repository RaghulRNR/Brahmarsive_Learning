import React, { Component } from 'react';
import propTypes from 'prop-types'
class Pagination extends Component {
    
    render() { 
        const { count,pageSize }=this.props
        const pageCount=Math.ceil(count/pageSize)
        const paginationArray=this.CreateArray(pageCount)
        
        return (
            <React.Fragment>
                <ul className="pagination" >
                    {paginationArray.map(
                        page =>  <li 
                        key={page} 
                        className={this.props.currentPage==page?"page-item active":"page-item"}>
                        <a className="page-link" onClick={()=>this.props.paginationClick(page)}>{page}</a></li> )
                    }           
                   
                   
                  </ul>
            </React.Fragment>
        );
    }

    CreateArray(pageCount){
        let arr=new Array()
        let count=1
        for(let i=0;i<pageCount;i++)
        {
            arr[i]=count
            count++;
        }

        return arr
    }
}
Pagination.propTypes={
    count:propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired,
    currentPage:propTypes.number.isRequired,
    paginationClick:propTypes.func.isRequired
}
export default Pagination;