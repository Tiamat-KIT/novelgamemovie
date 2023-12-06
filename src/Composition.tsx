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

export const MyComposition/* : React.FC<z.infer<typeof myCompSchema>> */ = (/* {
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
} */) => {
	const DefaultFrame = 100
	const person = "うたかたくん"
	const StoryContent:Story[] = [
		{
			text: "今日のごはんはどうしようか",
			person
		},{
			text: "ランチで特にめぼしいおかずもないな...",
			person
		},{
			text: "今日もかつ丼にするか...",
			person
		}
	]
	return (
		<AbsoluteFill className="bg-[url('../public/Gray/1.png')] min-h-screen bg-cover">
			<Sequence durationInFrames={DefaultFrame} >
				<Title titleText='昨日未明' titleColor='white' />
			</Sequence>
			{StoryContent.map((content,index) => {
				const AddPadding = index
				return (
				<Sequence key={index} from={DefaultFrame * index}>
					<NovelLikeText text={content.text} human={content.person} AddPadding={AddPadding} />
				</Sequence>
				)
			})}
			
		</AbsoluteFill>
	);
};
