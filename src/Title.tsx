import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20,40,80,100], [0,1,1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity, color: titleColor,WebkitTextStroke: "1px #000"}}
			className="text-5xl font-bold leading-relaxed [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex justify-center h-1/2 w-full"

		>
			{' '}
			{titleText}
		</div>
	);
};
