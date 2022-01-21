import React from 'react';
import Header from '../components/Header';

function Homepage() {
	const img = '/assets/images/img-3.jpeg';

	console.log(window.innerWidth);

	return (
		<div>
			<Header />
			<div className='main'>
				<div className='name'>
					<h1>Agbesi-Ntibrey Francis Jnr</h1>
					{/* <h2>Fullstack Web Developer based in Ghana</h2> */}
				</div>
				<div className='home'>
					<div className='bio'>
						<div>
							<h4>Biography</h4>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Aperiam expedita nisi, eaque aliquid nam doloribus eveniet
								labore ullam adipisci odit
							</p>
						</div>
						<div>
							<h4>Contact</h4>
							<div>
								<div>Kasoa, Central Region</div>
								<div>littelfrancis28@gmail.com</div>
								<div>0246456675</div>
							</div>
						</div>
						<div>
							<h4>Services</h4>
							<div>
								<div>Full Stack Web Development</div>
								<div>Mobile Application Development</div>
							</div>
						</div>
					</div>
					<div className='image'>
						<img src={img} alt='myImage' />
					</div>
					<div className='figures'>
						<div>
							<h4>Years of Experience</h4>
							<p>8</p>
						</div>
						<div>
							<h4>Satisfaction of Clients</h4>
							<p>100%</p>
						</div>
						<div>
							<h4>Clients Worldwide</h4>
							<p>+80</p>
						</div>
						<div>
							<h4>Projects Done</h4>
							<p>10</p>
						</div>
					</div>
					<div className='mobile_home'>
						<div className='bio'>
							<div>
								<h4>Biography</h4>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Aperiam expedita nisi
								</p>
							</div>
							<div>
								<h4>Contact</h4>
								<div>
									<div>Kasoa, Central Region</div>
									<div>
										<label htmlFor='Mail'>Gmail:</label> littelfrancis28
									</div>
									<div>0246456675</div>
								</div>
							</div>
							<div>
								<h4>Services</h4>
								<div>
									<div>Full Stack Web Development</div>
									<div>Mobile Application Development</div>
								</div>
							</div>
						</div>
						<div className='figures'>
							<div>
								<h4>Years of Experience</h4>
								<p>8</p>
							</div>
							<div>
								<h4>Satisfaction of Clients</h4>
								<p>100%</p>
							</div>
							<div>
								<h4>Clients Worldwide</h4>
								<p>+80</p>
							</div>
							<div>
								<h4>Projects Done</h4>
								<p>10</p>
							</div>
						</div>
					</div>
					<div className='socials' id='companies'>
						<a href='https://mobile.twitter.com/airlyyy_' className='social-t'>
							<i className='fa fa-twitter'></i>
						</a>
						<a
							href='https://web.facebook.com/diablo.noir.75'
							className='social-f'>
							<i className='fa fa-facebook'></i>
						</a>
						<a href='https://github.com/Airly12000' className='social-g'>
							<i className='fa fa-github'></i>
						</a>
						<a
							href='https://www.linkedin.com/in/francis-jnr-agbesi-ntibrey-9762781a5/'
							className='social-l'>
							<i className='fa fa-linkedin'></i>
						</a>
						<a href='https://mobile.twitter.com/airlyyy_' className='social-t'>
							<i className='fa fa-twitter'></i>
						</a>
						<a
							href='https://web.facebook.com/diablo.noir.75'
							className='social-f'>
							<i className='fa fa-facebook'></i>
						</a>
						<a href='https://github.com/Airly12000' className='social-g'>
							<i className='fa fa-github'></i>
						</a>
						<a
							href='https://www.linkedin.com/in/francis-jnr-agbesi-ntibrey-9762781a5/'
							className='social-l'>
							<i className='fa fa-linkedin'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
