export interface Celebridade {
			adult: boolean,
			gender: number,
			id: number,
			known_for_department: string,
			name: string,
			original_name: string,
			popularity: number,
			profile_path: string,
			known_for: [
				{
					backdrop_path: string,
					id: string,
					title: string,
					original_title: string,
					overview: string,
					poster_path: string,
					media_type: string,
					adult: boolean,
					original_language: string,
					genre_ids: [number],
					popularity: number,
					release_date: Date,
					video: boolean,
					vote_average: number,
					vote_count: number
				}
				]
		
}
