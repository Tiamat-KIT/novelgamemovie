
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

export const Third/* : React.FC<z.infer<typeof myCompSchema>> */ = (/* {
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
} */) => {
	const DefaultFrame = 125
	const person = "学生A"
	const StoryContent:StoryText[] = [
		{
			text: "まあ食べるとしたらかつ丼だよね",
			person
		},{
			text: "味噌カツいいなあ",
			person
		},{
			text: "味噌カツ丼にするか...",
			person
		},{
			text: "初めて食べるなあ、わくわくすっぞ...",
			person
		},{
			text: "いただきま～す！",
			person
		}
	]

	return (
		<AbsoluteFill>
			<Img src={staticFile("/3.png")} className="bg-image1 min-h-screen bg-cover"/>
			<Sequence durationInFrames={DefaultFrame} >
				<Title titleText='入店' titleColor='white' />
			</Sequence>
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
