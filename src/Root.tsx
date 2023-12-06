import {Composition} from 'remotion';
import './style.css';
import AllMovies from './AllMovies';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={AllMovies}
				durationInFrames={3500}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
