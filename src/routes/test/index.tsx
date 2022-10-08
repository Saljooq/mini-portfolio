import { h } from 'preact';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import Modal from '../../components/modal';
import style from './style.css';



interface Props {
    showModal: boolean;
}

const Test = (prop: Props) => {

	
	const [isVisible, setVisible] = useState(prop.showModal)

	const openModal = () => {
		route("/test/show", true);
		setVisible(true);
	}

	
	return (
	<div class={style.maintest}>

		<h1>Hello there!!</h1>
		<h2>This is a test for Interactive content with small packet size</h2>

		<p>This is a example of a <button class={style.cta} onClick={openModal}> simple modal</button></p>

		<h3>TO BE ADDED</h3>
		<ul>
			<li>Some way of rendering nicely linted code</li>
			<li>Some mechanism of adding images</li>
			<li>Some way of displaying cards</li>
			<li>More interactive tabs at the top</li>
			<li>A jsonised version of input for easy update and build up for the future</li>
		</ul>

		<h2>GOAL: always keep packet size small. Preferably &lt; 50 KB (minus the image size obviously)</h2>
		<p><a href="https://tools.pingdom.com/">Here</a> is the link to do the test</p>

		<Modal isVisible={isVisible} closeModel={() => {
			route("/test", true);
			return setVisible(false);
		}} />

	</div>
)};

export default Test;
