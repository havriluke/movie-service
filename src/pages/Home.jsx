import React from 'react'
import { OutlineButton } from '../components/button/Button'
import HeroSlide from '../components/hero-slide/HeroSlide'
import {useNavigate} from 'react-router-dom'
import MovieList from '../components/movie-list/MovieList'

import { category, movieType, tvType } from '../api/tmdbApi'

const Home = () => {
	const navigate = useNavigate()

	return (
		<>
		<HeroSlide />

		<div className="container">
			<div className="section mb-3">
				<div className="section__header mb-2">
					<h2>Trending Movies</h2>
					<OutlineButton className='small' onClick={() => {navigate('/movie')}}>
						View More
					</OutlineButton>
				</div>
				<MovieList category={category.movie} type={movieType.popular}/>
			</div>

			<div className="section mb-3">
				<div className="section__header mb-2">
					<h2>Top Rated Movies</h2>
					<OutlineButton className='small' onClick={() => {navigate('/movie')}}>
						View More
					</OutlineButton>
				</div>
				<MovieList category={category.movie} type={movieType.top_rated}/>
			</div>

			<div className="section mb-3">
				<div className="section__header mb-2">
					<h2>Tranding TV</h2>
					<OutlineButton className='small' onClick={() => {navigate('/tv')}}>
						View More
					</OutlineButton>
				</div>
				<MovieList category={category.tv} type={tvType.popular}/>
			</div>

			<div className="section mb-3">
				<div className="section__header mb-2">
					<h2>Top Rated TV</h2>
					<OutlineButton className='small' onClick={() => {navigate('/tv')}}>
						View More
					</OutlineButton>
				</div>
				<MovieList category={category.tv} type={tvType.top_rated}/>
			</div>
		</div>

			
		</>
	)
}

export default Home