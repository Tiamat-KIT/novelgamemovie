
import {Img} from 'remotion'
import {staticFile} from 'remotion'
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

import NovelLikeText from './NovelLikeText';
import { Title } from './Title';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

type StoryText = {
	text: string,
	person: string
}

export const Second/* : React.FC<z.infer<typeof myCompSchema>> */ = (/* {
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
} */) => {
	const DefaultFrame = 125
	const person = "学生A"
	const StoryContent:StoryText[] = [
		{
			text: "なんかいいとこないかなぁ",
			person
		},{
			text: "そういや学食以外で外で食べたことがないや",
			person
		},{
			text: "め～ちゃくちゃかつ丼の気分だな...",
			person
		},{
			text: "そういや『かつや』いったことないな",
			person
		},{
			text: "いってみるか！",
			person
		}
	]

	return (
		<AbsoluteFill>
			<Img src={staticFile("/2.png")} className="bg-image1 min-h-screen bg-cover"/>
			{StoryContent.map((content,index) => {
				const AddPadding = index
				return (
				<Sequence key={index} from={DefaultFrame * index + 100}>
					<NovelLikeText text={content.text} human={content.person} AddPadding={AddPadding} />
				</Sequence>
				)
			})}
		</AbsoluteFill>
	);
};
