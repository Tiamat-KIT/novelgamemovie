import {Img} from 'remotion'
import {staticFile} from 'remotion'
import {AbsoluteFill, Sequence,} from 'remotion';


import NovelLikeText from './NovelLikeText';
import { Title } from './Title';

type StoryText = {
	text: string,
	person: string
}

export const First/* : React.FC<z.infer<typeof myCompSchema>> */ = (/* {
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
} */) => {
	const DefaultFrame = 125
	const person = "学生A"
	const StoryContent:StoryText[] = [
		{
			text: "今日のごはんはどうしようか",
			person
		},{
			text: "学食もうまいんだけど、ずっとそれってのもな...",
			person
		},{
			text: "まあかつ丼食べたいのは変わらないんだけど...",
			person
		},{
			text: "とはいえ学食のかつ丼食い飽きたな...",
			person
		},{
			text: "どこか食べに行くか...",
			person
		}
	]

	return (
		<AbsoluteFill>
				<Sequence durationInFrames={DefaultFrame} >
					<Title titleText='ある日のお昼ごろ' titleColor='white' />
				</Sequence>
				{StoryContent.map((content,index) => {
					const AddPadding = index
					return (
					<Sequence key={index} from={DefaultFrame * index + 100}>
						<NovelLikeText text={content.text} human={content.person} AddPadding={AddPadding} />
					</Sequence>
					)
				})}
			<Img src={staticFile("/1.png")} className="bg-image1 min-h-screen bg-cover" />
		</AbsoluteFill>
	);
};
