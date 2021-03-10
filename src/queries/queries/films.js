import gql from 'graphql-tag';

export const ListQuery = gql`
query {
  allFilms{
	films{
	    id,
	    title,
	    created,
	    director,
	    episodeID,
	    producers,
	    openingCrawl
       }
   }
}
`;
