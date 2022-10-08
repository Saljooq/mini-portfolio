import { h } from 'preact';
import { useState } from 'preact/hooks';
import Modal from '../../components/modal';
import style from './style.css';

const Test = () => {
	
	const [isVisible, setVisible] = useState(false)

	
	return (
	<div>
		<h1>Home</h1>
		<p>This is the Home component.</p>

		<p>This is a example of a <button class={style.cta} onClick={() => setVisible(!isVisible)}> simple modal</button></p>

		<Modal isVisible={isVisible} closeModel={() => setVisible(false)} />
		<p>Hello there!!</p>

	</div>
)};

export default Test;
