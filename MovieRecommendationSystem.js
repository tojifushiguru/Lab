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
    let ratings = [];
    for(let movie of movieRecommedations) {
        ratings.push(movie['rating']);
    }

    return Math.max(...ratings);
}

function groupMoviesByDecade(movieRecommedations) {
    let release_years = {'1990s':[], '2000s':[], '2010s':[], '2020':[]};
    let years = Object.keys(release_years)

    for(let year of years) {
        for(let movie of movieRecommedations) {
            if(year.substring(0, 2) === movie['released'].substring(0, 2)) {
                if(year.substring(2, 3) === movie['released'].substring(2, 3)) {
                    release_years[year] = movie;
                }
            }
        }
    }

    return release_years;
}

function addMovieToRecommendations() {
    let movieInfo = {'title':null, 'genre': null, 'rating':null, 'released':null};
    
    title['title'] = prompt('Enter movie title: ');
    genre['genre'] = prompt('Enter movie genre: ');
    rating['rating'] = prompt('Enter movie rating: ');
    released['released'] = prompt('Enter movie release year: ');

    movieRecommedations.push(movieInfo);
}

// console.log('1910s'.substring(0, 2), '1910s'.substring(2, 3));
// console.log(groupMoviesByDecade(movieRecommedations));

while(true) {
    console.log('Movie Recommdation System');
    console.log('1. Recommend a movie');
    console.log('2. Enter a genre for a movie recommendation');
    console.log('3. Get average rating of movies');
    console.log('4. Get highest rated movie');
    console.log('5. Movies by decade')
    console.log('6. Exit');

    let input = prompt('Enter a number from the above options');

    switch(input) {
        case '1':
            addMovieToRecommendations();
            break;
        case '2':
            filterByGenre(movieRecommedations);
            break;
        case '3':
            getAverageRating(movieRecommedations);
            break;
        case '4':
            returnHighestRatedMovie(movieRecommedations);
            break;
        case '5':
            groupMoviesByDecade(movieRecommedations);
            break;
        case '6':
            break;
    }
}

