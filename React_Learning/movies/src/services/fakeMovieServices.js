const movies=[
    {
        _id:"a123rnr101",
        title:"Nayagan",
        genre:{_id:"a123rah101",name:"Action"},
        numberInStock:6,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01",
        like:true
    },
    {
        _id:"a123rnr102",
        title:"Virumandi",
        genre:{_id:"a123rah102",name:"Action"},
        numberInStock:7,
        dailyRentalRate:4.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr103",
        title:"VadaChennai",
        genre:{_id:"a123rah103",name:"Action"},
        numberInStock:6,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr104",
        title:"varanam Airayam",
        genre:{_id:"a123rah101",name:"Love drama"},
        numberInStock:5,
        dailyRentalRate:3.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr105",
        title:"Uttama Villan",
        genre:{_id:"a123rah105",name:"Emotional Drama"},
        numberInStock:8,
        dailyRentalRate:6.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr106",
        title:"Ayudha ezhuthu",
        genre:{_id:"a123rah106",name:"Political Drama"},
        numberInStock:6,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr107",
        title:"Kaithi",
        genre:{_id:"a123rah107",name:"Action"},
        numberInStock:10,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },

]

export function getMovies(){
    return movies
}
export function getMovie(id){
    return movies.find(m => m._id===id)
}