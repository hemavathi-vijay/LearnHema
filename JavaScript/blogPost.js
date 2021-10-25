// Create blog post object Constructor
/*
let post = {

    title : 'i am the boss',
    body : 'bjbkjf',
    author :'Vijay',
    views :876,
    comments : [
        {author :'swetha', text :'super appa'},
        {author : 'suriya', text : 'good'}
    ],
    isLive : true
};

console.log(post);
*/


function Post(title,author,body){
    this.title = title;
    this.author =author;
    this.body = body;
    this.views =0;
    this.comments =[];
    this.isLive = false
}

const newPost = new Post('I am the Boss','Vijay','Super awesome');

console.log(newPost);