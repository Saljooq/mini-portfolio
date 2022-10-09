import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
    user: string;
}

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: Props) => {
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	const merm_graph = `| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

[ ] task list\n
[x] checked item


\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
	
	`

    return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>

			<ReactMarkdown>
					# Hello, *world*!
			</ReactMarkdown >
			<ReactMarkdown 
				children={merm_graph} 
				remarkPlugins={[remarkGfm]}
				className={style.reactMarkdown}
			/>
		</div>
	);
};

export default Profile;
