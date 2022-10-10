import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import {marked} from 'marked';


interface Props {
    user: string;
}

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: Props) => {
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);

	useEffect(()=>{
		const unorderedLists = document.querySelectorAll("ul")
		if (unorderedLists){

			for (let i = 0; i < unorderedLists.length; i++){
				const unorderedList = unorderedLists[i];
				const targetedEl = unorderedList.querySelector("input[type='checkbox']")
				if (targetedEl){
					unorderedList.style.listStyleType = 'none'
					unorderedList.style.marginLeft = '0.5rem'
					unorderedList.style.padding = '0';
				}
			}

		}
	}, [])


	// const str = '# Marked in the browser\n\nRendered by **marked**.'
	const str = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

### Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley


## This is another list that I'm working on
- hello
- to 
- you

### check-list again

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)

# This is the same old list
- hello
- to 
- you
	- I'm here too
	- Let's see how far this goes
1. This should get ordered list
2. Or not


\`\`\`python 
def hello_world():
	print('hello there!')

\`\`\`

\`\`\` 
cd \\home
\`\`\`

😃 

![Alt text](https://media.tenor.com/Kx6Jx03-TNUAAAAM/omg-hell.gif "a title")

`
	const parsed = marked.parse(str)
	

    useEffect(() => {
		const timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

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

			<div dangerouslySetInnerHTML={{__html: parsed}} />

		</div>
	);
};

export default Profile;
