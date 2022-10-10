import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style.css';
import {marked} from 'marked';

// Note: `user` comes from the URL, courtesy of our router
const MD = () => {

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

# This page is a test for the rendering of md - and its affect on page size

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
## Sorry no images here :( - testing load for minus images

`
	const parsed = marked.parse(str)
	
    return (
		<div class={style.profile}>
			<br />
			<div dangerouslySetInnerHTML={{__html: parsed}} />

		</div>
	);
};

export default MD;
