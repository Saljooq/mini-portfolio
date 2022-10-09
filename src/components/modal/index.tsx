import { h } from 'preact';
import { MutableRef, useEffect, useRef } from 'preact/hooks';
import style from './style.css';

interface IProp{
	isVisible: boolean;
    closeModal: ()=> void;
    children: any;
}

const Modal = (props: IProp) => { 

    useEffect(() => {
        document.addEventListener('click', handleClick, true)

        return function cleanup() {
            document.removeEventListener('click', handleClick, true)
          }; 
    }, [])

    const refOne: MutableRef<any> = useRef(null)

    const handleClick = (e: MouseEvent) => {

        if (refOne && refOne.current && !refOne.current.contains(e.target as Node)){
            props.closeModal();
        }
    }

	
	if (props.isVisible)
    {
        return (
            <div>
                <div id="google" class={style.modaloverlay}>
                    <div class={style.modal}  ref={refOne} >
                        <button onClick={props.closeModal} class={style.close}>&times;</button>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }

	return null

}

export default Modal;
