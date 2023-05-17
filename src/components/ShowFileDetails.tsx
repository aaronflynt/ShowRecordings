import { Icon, IconButton } from '@mui/material';
import { ShowFile } from '../types/Show';

interface ShowFileDetailsProps {
	file: ShowFile;
}

function ShowFileDetails({ file }: ShowFileDetailsProps) {
	const isAudioFile = (fileName: string) => {
		const fileNameLowerCase = fileName.toLocaleLowerCase();
		return fileNameLowerCase.endsWith('.mp3') 
			|| fileNameLowerCase.endsWith('.wav')
			|| fileNameLowerCase.endsWith('.ogg');
	}
	return (
		<>
			{isAudioFile(file.name) && (
				<audio controls autoPlay={true}>
					<source src={file.url} />
				</audio>
			)}
			<IconButton 
				href={file.url} 
				LinkComponent="a" 
				sx={{ ml: 2 }} 
				aria-label={`View ${file.name}`} 
				target="_blank"
			>
				<Icon>link</Icon>
			</IconButton>
		</>
	)
}
export default ShowFileDetails;