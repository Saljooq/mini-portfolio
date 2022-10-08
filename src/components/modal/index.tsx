import { h } from 'preact';
import style from './style.css';

interface IProp{
	isVisible: boolean;
    closeModel: ()=> void;
}

const Modal = (prop: IProp) => { 

	
	if (prop.isVisible)
    {
        return (
            <div>
                <div id="google" class={style.modaloverlay}>
                    <div class={style.modal}>
                        <button onClick={prop.closeModel} class={style.close}>&times;</button>
                        <div>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                            <br />
                            <p>hello</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

	return null

}

export default Modal;
