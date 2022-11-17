import React from 'react'
import './footer.scss'
import bg from '../../assets/footer-bg.jpg'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
	const navigate = useNavigate()

	return (
		<div className='footer' style={{backgroundImage: `url(${bg})`}}>
			<div className="footer__content">
				<div className="footer__content__logo">
					<div className="logo" onClick={() => {navigate('/')}}>
						<i className='bx bx-movie-play logo'></i>
						movee
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer