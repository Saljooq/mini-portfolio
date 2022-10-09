import { Fragment, h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import Modal from '../../components/modal';
import style from './style.css';



interface Props {
    showModal: boolean;
}

const Test = (prop: Props) => {

	
	const [isVisible, setVisible] = useState(prop.showModal)


	useEffect(() => {
		// Update the visible as the url get's update during history navigation 
		setVisible(prop.showModal);
	  }, [prop.showModal]);


	const openModal = () => {
		route("/test/show");
		setVisible(true);
	}


	const range = (start:number, end: number)  => Array.from({length: (end - start)}, (v, k) => k + start);

	const arr = range(0, 12);

	
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

		<Modal isVisible={isVisible} closeModal={() => {
			route("/test");
			return setVisible(false);
		}} >
			<div>
				{arr.map( (i) => (
					<Fragment key={i}>
						<h1>Here is some content inside the Modal.</h1>
						<p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
					</Fragment>
				))}
				<br />
				<p>The end</p>
				<br />
			</div>
		</Modal>

	</div>
)};

export default Test;
