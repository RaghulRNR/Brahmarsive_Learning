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
        genre:{_id:"a123rah101",name:"Love"},
        numberInStock:5,
        dailyRentalRate:3.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr105",
        title:"Uttama Villan",
        genre:{_id:"a123rah105",name:"Emotional"},
        numberInStock:8,
        dailyRentalRate:6.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr106",
        title:"Ayudha ezhuthu",
        genre:{_id:"a123rah106",name:"Political"},
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
    {
        _id:"a123rnr108",
        title:"Udhyam-NH4",
        genre:{_id:"a123rah108",name:"Love"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr109",
        title:"Papanasam",
        genre:{_id:"a123rah109",name:"Thriller"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr110",
        title:"Raja Rani",
        genre:{_id:"a123rah110",name:"Love"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr111",
        title:"Managaram",
        genre:{_id:"a123rah111",name:"Thriller"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr112",
        title:"OK-Ok",
        genre:{_id:"a123rah112",name:"Comedy"},
        numberInStock:8,
        dailyRentalRate:2.5,
        publishDate:"2022-01-01"
    },
    {
        _id:"a123rnr113",
        title:"SMS",
        genre:{_id:"a123rah111",name:"Comedy"},
        numberInStock:8,
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