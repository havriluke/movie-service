import React from 'react'
import './movie-card.scss'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import PropTypes from 'prop-types'
import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

const MovieCard = props => {
    const navigate = useNavigate()
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

    return (
        <div>
            <div
                className='movie-card'
                onClick={() => {navigate(link)}}
                style={{backgroundImage: `url(${bg})`}}
            >
                <div className='play'>
                    <i className="bx bx-play"></i>
                </div>
            </div>
            <h3>{item.title || item.name}</h3>
        </div>
        
    )
}

MovieCard.propTypes = {

}

export default MovieCard