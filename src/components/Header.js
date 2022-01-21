import React, { useState } from 'react';

function Header() {
	const [display, setDisplay] = useState('none');

	const toggle = () => {
		if (display === 'flex') {
			setDisplay('none');
		} else {
			setDisplay('flex');
		}
	};

	const handleClick = () => {
		setDisplay('none');
	};

	window.addEventListener('resize', handleClick);

	return (
		<header>
			<div className='links'>
				<a href='/about'>About</a>
				<a href='/projects'>Projects</a>
				<a href='/portfolio'>Portfolio</a>
				<a href='/contact'>Contact</a>
			</div>
			<div className='toggle' onClick={toggle}>
				<i className='fa fa-bars'></i>
			</div>
			<div className='links_width' style={{ display: display }}>
				<a href='/'>Home</a>
				<a href='/about'>About</a>
				<a href='/projects'>Projects</a>
				<a href='/portfolio'>Portfolio</a>
				<a href='/contact'>Contact</a>
			</div>
			<div className='logo'>
				<a href='/'>
					<i className='fa fa-grav'></i>
				</a>
			</div>
			<div className='socials'>
				<a
					href='https://mobile.twitter.com/airlyyy_'
					rel='noreferrer'
					target={'_blank'}
					className='social-t'>
					<i className='fa fa-twitter'></i>
				</a>
				<a
					href='https://web.facebook.com/diablo.noir.75'
					rel='noreferrer'
					target={'_blank'}
					className='social-f'>
					<i className='fa fa-facebook'></i>
				</a>
				<a
					href='https://github.com/Airly12000'
					rel='noreferrer'
					target={'_blank'}
					className='social-g'>
					<i className='fa fa-github'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/francis-jnr-agbesi-ntibrey-9762781a5/'
					rel='noreferrer'
					target={'_blank'}
					className='social-l'>
					<i className='fa fa-linkedin'></i>
				</a>
			</div>
		</header>
	);
}

export default Header;
