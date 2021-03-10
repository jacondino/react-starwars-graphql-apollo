import gql from 'graphql-tag';

export const ListQuery = gql`
query {
  allFilms{
	films{
	    id,
	    title,
	    createdAt,
			director,
	    episodeId,
	    producers,
	    openingCrawl
       }
   }
}
`;
