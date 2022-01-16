import React, { useState } from 'react';
import Header from '../components/Header';

function About() {
	const [img, setImg] = useState('/assets/images/img-3.jpeg');
	const [img2, setImg2] = useState('/assets/images/img-4.jpeg');

	return (
		<div>
			<Header />
			<div className='main'>
				<h1 className='title'>About</h1>
				<div className='about_grid'>
					<div className='about_img'>
						<div className='background'></div>
						<img src={img} alt='myImage' className='img1' />
						<img src={img2} alt='myImage' className='img2' />
					</div>
					<div className='info'>
						<div>
							<h3>Bio</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
								numquam, in delectus recusandae fuga officia repellendus illo
								architecto natus eligendi laudantium expedita est impedit sequi
								odit optio, libero omnis ipsam? Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Voluptatum similique, natus
								repellat dolores fugit repellendus recusandae eius minima nobis
								libero quo quasi blanditiis sunt voluptatem rerum officiis
								autem, magni ex.
							</p>
						</div>
						<div className='other'>
							<label htmlFor='DOB'>DOB : </label>
							28th January, 2000
						</div>
						<div className='other'>
							<label htmlFor='Status'>Marital Status : </label>
							Single
						</div>
						<div className='other'>
							<label htmlFor='Address'>Address : </label>
							Box GP 13272 Accra
						</div>
						<div className='other'>
							<label htmlFor='House'>House No. : </label>
							A556/1 19 Kpakpo Brown Road, Korle-Gonno, Accra
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
