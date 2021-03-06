import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import Header from '../components/Header';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submit, setSubmit] = useState('none');
	const [errorMessage, setErrorMessage] = useState(null);

	const handleChange = (event) => {
		const name = event.target.name;
		if (name === 'name') {
			setName(event.target.value);
		} else if (name === 'email') {
			setEmail(event.target.value);
		} else {
			setMessage(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		setSubmit('inline-block');

		if (name && email && message) {
			emailjs.send(
				'default_service',
				'airly12001',
				{
					from_email: email,
					from_name: name,
					message: message,
				},
				init('user_ojoUDIkOgkrhwfYgQ1nUE')
			);

			setErrorMessage(false);
		} else {
			setErrorMessage(true);
		}
	};

	return (
		<div>
			<Header />
			<div className='main'>
				<h1 className='title'>Contact</h1>
				<div className='contact'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5070159645084!2d-0.4273959291223008!3d5.5335116610301265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbb55a16e989f%3A0x1a978a719881acfc!2sKasoa%20New%20Market!5e0!3m2!1sen!2sgh!4v1642361819291!5m2!1sen!2sgh'
						title='home'
						allowFullScreen=''
						loading='lazy'></iframe>
					<div className='row'>
						<h2>Send us a message</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab esse
							itaque omnis corrupti, delectus dolorem ullam laudantium, enim
							quos alias asperiores blanditiis aperiam libero nisi aut ad
							commodi quibusdam? Voluptatum.
						</p>
						<div className='c_details'>
							<form className='form'>
								<input
									type='text'
									name='name'
									id=''
									value={name}
									onChange={handleChange}
									placeholder='Your name'
								/>
								<input
									type='email'
									name='email'
									id=''
									value={email}
									onChange={handleChange}
									placeholder='Your email'
								/>
								<textarea
									name='message'
									value={message}
									onChange={handleChange}
									id=''
									cols='30'
									rows='10'
									placeholder='Message'></textarea>
								<button type='submit' onClick={handleSubmit}>
									Submit
								</button>
								<div style={{ display: submit }}>
									{errorMessage ? (
										<p style={{ color: 'red' }}>Fill in all details</p>
									) : (
										<p style={{ color: 'red' }}>Message Submitted</p>
									)}
								</div>
							</form>
							<div className='c_info'>
								<p>
									<a href='https://www.google.com/maps?ll=5.534416,-0.425274&z=17&t=m&hl=en&gl=GH&mapclient=embed&cid=1916152386964008188'>
										<i className='fa fa-address-card'></i>Kasoa New Market
									</a>
								</p>
								<p>
									<a href='tel:+233246456675'>
										<i className='fa fa-phone'></i>0246456675
									</a>
								</p>
								<p>
									<a href='mailto:littlefrancis28@gmail.com'>
										<i className='fa fa-envelope'></i>littlefrancis@gmail.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
