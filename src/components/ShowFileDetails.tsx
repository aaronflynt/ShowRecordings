import { Box, Icon, Button, Link, Stack, Typography } from '@mui/material';
import { ShowFile } from '../types/Show';
import formatBytes from '../utils/formatBytes.ts';

interface ShowFileDetailsProps {
	file: ShowFile;
	setSelectedFile: Function;
}

function ShowFileDetails({ file, setSelectedFile }: ShowFileDetailsProps) {
	const isAudioFile = (fileName: string) => {
		const fileNameLowerCase = fileName.toLocaleLowerCase();
		return fileNameLowerCase.endsWith('.mp3') 
			|| fileNameLowerCase.endsWith('.wav')
			|| fileNameLowerCase.endsWith('.ogg');
	}
	return (
		<Stack sx={{px: 2, py: 2}} direction={{xs: 'column', sm: 'row'}} spacing={2}>
			{isAudioFile(file.name) && (
				<Box sx={{ flexGrow: 1 }}>
					<audio controls autoPlay={true} style={{width: '100%'}}>
						<source src={file.url} />
					</audio>
				</Box>
			)}
			<Stack>
				<Typography>
					<Link href={file.url} target="_blank">{file.name}</Link><br />
					Size: {formatBytes(file.size)}<br />
					Last Modified: {(new Date(file.modified * 1000)).toLocaleString()}
				</Typography>
			</Stack>
			<Button onClick={() => setSelectedFile(null)}><Icon>expand_circle_down_icon</Icon></Button>
		</Stack>
	)
}
export default ShowFileDetails;