export const genres=[
    {_id:"a123rnrgenre101",name:"Action"},
    {_id:"a123rnrgenre102",name:"Comedy"},
    {_id:"a123rnrgenre103",name:"Thriller"},
    {_id:"a123rnrgenre104",name:"Love"},
    {_id:"a123rnrgenre105",name:"Political"},
    {_id:"a123rnrgenre106",name:"Emotional"},
    

    
]

export function Getgenres() {
    return genres.filter(g => g)
}