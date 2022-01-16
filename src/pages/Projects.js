import React, { useState } from 'react';
import Header from '../components/Header';

function Projects() {
	const [img, setImg] = useState('/assets/images/img-3.jpeg');

	return (
		<div>
			<Header />
			<div className='main'>
				<h1 className='title'>Projects</h1>
				<div className='projects_grid'>
					<div className='project'>
						<img src={img} alt='pro' />
						<div>
							<h3>MyHostelGH</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium rerum, dicta sed eligendi modi reprehenderit nisi
								cum veritatis quidem quasi a.
							</p>
						</div>
					</div>
					<div className='project'>
						<img src={img} alt='pro' />
						<div>
							<h3>MyHostelGH</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium rerum, dicta sed eligendi modi reprehenderit nisi
								cum veritatis quidem quasi a.
							</p>
						</div>
					</div>
					<div className='project'>
						<img src={img} alt='pro' />
						<div>
							<h3>MyHostelGH</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium rerum, dicta sed eligendi modi reprehenderit nisi
								cum veritatis quidem quasi a.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
