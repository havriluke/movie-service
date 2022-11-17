import React, { useCallback, useEffect, useState } from 'react'
import './movie-grid.scss'
import MovieCard from '../movie-card/MovieCard'
import { useNavigate, useParams } from 'react-router-dom'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import { OutlineButton } from '../button/Button'
import Input from '../input/Input'

const MovieGrid = props => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const navigate = useNavigate()
    const {keyword} = useParams()

    const getList = async (page, items) => {
        let response = null
        if (keyword === undefined) {
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, {page})
                    break
                default:
                    response = await tmdbApi.getTvList(tvType.on_the_air, {page})
            }
        } else {
            response = await tmdbApi.search(props.category, {query: keyword, page})
            if (!response.results.length) navigate('/' + props.category)
        }
        setItems([...items, ...response.results])
        setTotalPage(response.total_pages)
    }

    useEffect(() => {
        getList(1, [])
        setItems([])
        setPage(1)
    }, [props.category, keyword])

    const loadMore = async () => {
        if (page >= totalPage) return
        getList(page+1, items)
        setPage(page+1)
    }

    return (
        <>
            <div className="search-line mb-3">
                <MovieSearch keyword={keyword} category={props.category}/>
                {!!keyword && <p>Results for <em>{keyword}</em></p>}
            </div>
            <div className='movie-grid'>
                {items.map((item, i) => <MovieCard key={i} category={props.category} item={item} />)}
            </div>
            {page < totalPage && (
                <div className="movie-grid__loadmore">
                    <OutlineButton className='small' onClick={loadMore}>Load more</OutlineButton>
                </div>
            )}
        </>
    )
}


const MovieSearch = props => {
    const navigate = useNavigate()

    const goToSearch = useCallback(
        (keyword) => {
            if (keyword.trim().length > 0) {
                navigate('/' + props.category + '/search/' + keyword)
            }
        },
        [props.category]
    )

    const enterEvent = (e) => {
        if (e.charCode === 13) {
            goToSearch(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <div className="movie-search">
            <Input
                type={'text'}
                placeholder={'Search...'}
                onKeyPress={enterEvent}
            />
        </div>
    )
}

export default MovieGrid