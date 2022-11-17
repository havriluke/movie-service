import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './movie-list.scss'
import SwiperCore, { Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import tmdbApi, {category} from '../../api/tmdbApi'
import MovieCard from '../movie-card/MovieCard'

import "swiper/components/navigation/navigation.scss";

const MovieList = props => {
    const [items, setItems] = useState([])

    SwiperCore.use([Navigation]);

    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = {}
            
            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(props.type, {})
                        break
                    default:
                        response = await tmdbApi.getTvList(props.type, {})
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        }
        getList()
    }, [])

    return (
        <div className='movie-list'>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" /> */}
                        <MovieCard item={item} category={props.category}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList