import { h } from 'preact';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import  github  from 'react-syntax-highlighter/dist/esm/styles/hljs/github';
import style from './style.css';
interface IProp{
    children: any;
}

SyntaxHighlighter.registerLanguage('python', python)

const Pycode = (props: IProp) => { 

    return (
    <SyntaxHighlighter class={style.pycode} style={github}>
        {props.children}
    </SyntaxHighlighter>

    )

}

export default Pycode;