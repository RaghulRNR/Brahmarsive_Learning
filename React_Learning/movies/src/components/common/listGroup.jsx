function ListGroup(props) {
    const {items,textProperty,valueproperty,handleGenre,selectedGenre}=props
    console.log(selectedGenre)
    return (
        <ul className="list-group">
            {items.map(item => 
            <li  
            onClick={()=>handleGenre(item)} 
            key={item[valueproperty]} 
            className={item===selectedGenre?"list-group-item active":"list-group-item"}>
                {item[textProperty]} 
            </li>)}
            </ul>
     );
}
ListGroup.defaultProps={
    valueproperty:"_id",
    textProperty:"name"

};
export default ListGroup;