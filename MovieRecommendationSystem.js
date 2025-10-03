const prompt = require('prompt-sync')();

let movieRecommedations = [{'title':'A Whisker Away', 'genre': 'romance', 'rating':93, 'released':'2020'}];

function getAverageRating(movieRecommedations) {
    let ratings = 0;
    for(let movie of movieRecommedations) {
        ratings += movie['rating'];
    }

    return ratings / movieRecommedations.length;
}

function filterByGenre(movieRecommedations) {
    let genres = ['romance', 'action', 'drama', 'comedy'];
    let filteredByGenres = {'romance':[], 'action':[], 'drama':[], 'comedy':[]};

    for(let genre of genres) {
        for(let movie of movieRecommedations) {
            if(genre === movie['genre']) {
                switch(genre) {
                    case 'romance':
                        filteredByGenres['romance'].push(movie);
                        break;
                    case 'action':
                        filteredByGenres['action'].push(movie);
                        break;
                    case 'drama':
                        filteredByGenres['drama'].push(movie);
                        break;
                    case 'comedy':
                        filteredByGenres['comedy'].push(movie);
                        break;
                }
            }
        }
    }

    return filteredByGenres;
}

function returnHighestRatedMovie(movieRecommedations) {
    let rating = 0;
    let highestRatedMovie = null;

    for(let movie of movieRecommedations) {
        if(movie['rating'] > rating) {
            rating = movie['rating'];
            highestRatedMovie = movie;
        }
    }

    return highestRatedMovie;

}

function groupMoviesByDecade(movieRecommedations) {
    let release_years = {'1990s':[], '2000s':[], '2010s':[], '2020s':[]};
    let years = Object.keys(release_years)

    for(let year of years) {
        for(let movie of movieRecommedations) {
            if(year.substring(0, 2) === movie['released'].substring(0, 2)) {
                if(year.substring(2, 3) === movie['released'].substring(2, 3)) {
                    release_years[year].push(movie);
                }
            }
        }
    }

    return release_years;
}

function addMovieToRecommendations() {
    let movieInfo = {'title':null, 'genre': null, 'rating':null, 'released':null};
    
    movieInfo['title'] = prompt('Enter movie title: ');
    movieInfo['genre'] = prompt('Enter movie genre: ');
    movieInfo['rating'] = prompt('Enter movie rating: ');
    movieInfo['released'] = prompt('Enter movie release year: ');

    movieRecommedations.push(movieInfo);

    return movieRecommedations;
}

let active = true;

while(active) {

    let result = null;

    console.log('Movie Recommdation System');
    console.log('1. Recommend a movie');
    console.log('2. Movie recommendations by genre');
    console.log('3. Get average rating of movies');
    console.log('4. Get highest rated movie');
    console.log('5. Movies by decade')
    console.log('6. Exit');
    console.log();

    let input = prompt('Enter a number from the above options: ');
    console.log();

    switch(input) {
        case '1':
            result = addMovieToRecommendations();
            for(let movie of result) {
                console.log(`Title ${movie['title']}`);
                console.log(`Genre ${movie['genre']}`);
                console.log(`Rating ${movie['rating']}`);
                console.log(`Year of release ${movie['released']}\n`);
            }
            break;
        case '2':
            result = filterByGenre(movieRecommedations);
            let genres = Object.keys(result);

            for(let genre of genres) {
                if(genre === 'romance') {
                    let movies = result[genre];
                    console.log('Romance:')
                    if(movies.length > 0) {
                        for(let movie of movies) {
                            console.log(`Title: ${movie['title']}`);
                            console.log(`Genre: ${movie['genre']}`);
                            console.log(`Rating: ${movie['rating']}`);
                            console.log(`Year of release: ${movie['released']}\n`);
                        }
                    } else {
                        console.log('No current recommendations\n');
                    }
                }
                if(genre === 'action') {
                    let movies = result[genre];
                    console.log('Action:')
                    if(movies.length > 0) {
                        for(let movie of movies) {
                            console.log(`Title: ${movie['title']}`);
                            console.log(`Genre: ${movie['genre']}`);
                            console.log(`Rating: ${movie['rating']}`);
                            console.log(`Year of release: ${movie['released']}\n`);
                        }
                    } else {
                        console.log('No current recommendations\n');
                    }
                }
                if(genre === 'drama') {
                    let movies = result[genre];
                    console.log('Drama:')
                    if(movies.length > 0) {
                        for(let movie of movies) {
                            console.log(`Title: ${movie['title']}`);
                            console.log(`Genre: ${movie['genre']}`);
                            console.log(`Rating: ${movie['rating']}`);
                            console.log(`Year of release: ${movie['released']}\n`);
                        }
                    } else {
                        console.log('No current recommendations\n');
                    }
                }
                if(genre === 'comedy') {
                    let movies = result[genre];
                    console.log('Comedy:')
                    if(movies.length > 0) {
                        for(let movie of movies) {
                            console.log(`Title: ${movie['title']}`);
                            console.log(`Genre: ${movie['genre']}`);
                            console.log(`Rating: ${movie['rating']}`);
                            console.log(`Year of release: ${movie['released']}`);
                            console.log();
                        }
                    } else {
                        console.log('No current recommendations\n');
                    }
                }
            }
            break;
        case '3':
            console.log(`Overall average ratings: ${getAverageRating(movieRecommedations)}\n`);
            break;
        case '4':
            result = movieRecommedations;
            for(let movie of result) {
                console.log(`Title: ${movie['title']}`);
                console.log(`Genre: ${movie['genre']}`);
                console.log(`Rating: ${movie['rating']}`);
                console.log(`Year of release: ${movie['released']}\n`);
            }
            break;
        case '5':
            result = groupMoviesByDecade(movieRecommedations);
            let years = Object.keys(result);

            for(let year of years) {
                console.log(`${String(year).toUpperCase()}:`);
                if(result[year].length > 0) {
                    for(let movie of result[year]) {
                        console.log(`Title: ${movie['title']}`);
                        console.log(`Genre: ${movie['genre']}`);
                        console.log(`Rating: ${movie['rating']}`);
                        console.log(`Year of release: ${movie['released']}\n`);
                    }
                } else {
                    console.log('No current recommendations\n')
                }
            }
            break;
        case '6':
            console.log('Program terminated');
            active = false;
    }

}

