const movie = {
    title : 'Roja',
    releaseYear : 1992,
    rating : 4.9,
    Director :'Mani Rathnam',
    LeadHero : 'Aravind'
}
showObj(movie);

function showObj(obj){

    for (let key in obj)
        if((typeof obj[key]) === 'string')
            console.log(key,' : ',obj[key]);
}