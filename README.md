# Recruitment Assignment: Movie Search React App

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae347535-7f2e-4471-ab81-34ec35d2b8b8/deploy-status)](https://app.netlify.com/sites/recruitment-assignment-movie-search-react-app/deploys)

## Live demo

https://recruitment-assignment-movie-search-react-app.netlify.app/

## Assignment description

Goal of the assignment was to provide web application that allows users to search movies.

No specific requirements about technologies and functions were defined to test both technical skills and product
awarness (including attention to details and UI/UX skills).

## Design

### Benchmarking

I believe that with limited resources for proper UX research and usability testing the best thing that product designer
can make for smaller apps is to perform solid benchmarking. By benchmarking I mean reviewing more mature digital
products for similar patterns and functions (they don't need to touch the same area but be similar in terms of problems
they solve).

Main inspirations for this application:

- Popular movie databases - because they always contain similar search feature:

  - [Filmweb](https://www.filmweb.pl/)
  - [IMDb](https://www.imdb.com/)
  - [TMDB](https://www.themoviedb.org/)

- Popular search engines - because they serve single purpose, to allow users just to search just like this application:
  - [Google](https://www.google.com/)
  - [DuckDuckGo](https://duckduckgo.com/)

# Features

- **Search input with auto-submit** - Input submits query after typing 3 characters and also aborts current request if
  query was changed
- **Basic RWD** - Every modern web application needs to support mobile devices (of course it could be improved)
- **Movies listing as grid of card with large posters** - In my opinion displaying visual content (like posters) for
  movies listing is must-have and that's why I decided to use TMDB API for this task
- **Load more button** - UI allows to load more results with a button, it seems suitable for simple search. For advanced
  search (i.e. with detailed parameters) probably standard pagination would be more usable.
- **Redirect to movie details** - UI needs to provide some meaningful action after searching, currently it redirect to
  TMDB webiste for simplicity.

## Implementation

### Architecture

For such simple project I used very basic project structure and no specific state management approach for simplicity. I
believe that architecture should grow naturally together with the project's size and actual needs.

### Technologies

- [TypeScript](https://www.typescriptlang.org/) - My go-to language for browser applications. Provides good scalability,
  maintanability and is widely known among front-end developers.
- [React](https://reactjs.org/) - Also my go-to UI ecosystem for browser applications.
- [RxJS](https://rxjs.dev/) - I found it very convinient to use for purpose of this specific application for handling
  features like auto-submit on typing, debouncing, aborting of async requests. Although for production system it should
  be consulted with the team if team feels comfortable with it because of its a bit steep learning curve.
- [styled-components](https://styled-components.com/) - This React-based CSS-in-JS library allows to easily maintain
  HTML markup and CSS styles expressed with single language (TypeScript).

### API choice

Assignment description suggested to use [OMDb API](http://www.omdbapi.com/) as a data source which has very limited
functionality (only search for movies list in free version).

I decided to choose [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) because of its robust
API (mainly because of ability to download movie posters which I consider as must have in movie search application). It
would also allow to potentially build more advanced search application including searching for TV shows, people, etc.

# Further development

Due to limited time for implementation this project is not perfect. Here's list of potential improvements.

## Potential features

- **Better visual/interaction/motion design** - Current UI design is very simple and could be improved a lot, for
  example animations added
- **Switching between card view/list view** - Card view has some disadventages in terms of scannability, some switch
  between card view/list view could be welcome (especially for narrow mobile views).
- **Virtual scroll or standard pagination** - Dynamically loading new listing element to the screen has performance
  limitations so virtual scroll or standard pagination can be better for some cases.
- **Skeleton screen or other loading indicator** - I decided to not implement any sort of loading indicator because API
  works quite fast (indicator is not necessary for <100ms loading time), potentially it can be improved with for example
  skeleton screen
- **Multi-search** - [API provides multi-search function](https://developers.themoviedb.org/3/search/multi-search) which
  can be used to display more different types of results at once
- **Movie rating** - API returns movie rating that could be displayed in similar manner as on
  [TMDB website](https://www.themoviedb.org/)
- **More sophisticated empty state screen** - Currently edge-case states are not handled perfectly, fancy illustrations
  could be used to provide better feedback for users.
- **Autocomplete** - Currently search is performed on single view so there's no need for autocomplete. In case of
  embedding search in larger application, some autocomplete feature would be welcome for quickier navigation.

## Potential technical improvements

- **General refactoring** - The code was never peer reviewed so it definetely contains a lot of flaws.
- **Bundle size optimization** - Application size could be reduced.
- **Routing** - Update URL in browser bar when changing a query.
- **RWD optimization** - Some aspects of RWD could be optimized, for example better image handling for different
  resolutions and screens with higher pixel density (e.g. Retina), current solution uses the same poster resolution for
  every screen size
