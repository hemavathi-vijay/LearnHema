const movies = [
    { titile : 'a', year : 2018, rating:4.5},
    { titile : 'b', year : 2018, rating:4.7},
    { titile : 'c', year : 2018, rating:3},
    { titile : 'd', year : 2017, rating:4.5},
];

 const title = movies
                .filter(m => m.year ===2018 && m.rating >=4)
                .sort((a,b)=> a.rating - b.rating)
                .reverse()
                .map(m=> m.titile)

console.log(title);
/*
sortMovies(movies);

function sortMovies(movies){
    
movies.sort((a,b)=> a.rating - b.rating);

for(let key of movies){

    if((key.year === 2018) &&(key.rating >= 4.5))
    console.log('Movie Title : ',key.titile);
}

}
*/