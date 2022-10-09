import { h } from 'preact';
import { MutableRef, useEffect, useRef } from 'preact/hooks';
import style from './style.css';

interface IProp{
	isVisible: boolean;
    closeModel: ()=> void;
}

const Modal = (prop: IProp) => { 

    useEffect(() => {
        document.addEventListener('click', handleClick, true)

        return function cleanup() {
            document.removeEventListener('click', handleClick, true)
          }; 
    }, [])

    const refOne: MutableRef<any> = useRef(null)

    const handleClick = (e: MouseEvent) => {

        if (refOne && refOne.current && !refOne.current.contains(e.target as Node)){
            prop.closeModel();
        }
    }

	
	if (prop.isVisible)
    {
        return (
            <div>
                <div id="google" class={style.modaloverlay}>
                    <div class={style.modal}  ref={refOne} >
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
