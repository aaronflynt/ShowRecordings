import { Show, ShowFile } from '../types/Show';
import { Box } from '@mui/material';
import ShowFileList from './ShowFileList'
import ShowSetList from './ShowSetList';

interface ShowDetailsProps {
	show: Show;
	selectedFile: ShowFile | null;
	setSelectedFile: Function;
}

function ShowDetails({ show, selectedFile, setSelectedFile }: ShowDetailsProps) {
	return (
		<Box>
			{show.files && (
				<ShowFileList showFiles={show.files} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			)}
			{show.shows && (
				<ShowSetList shows={show.shows} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			)}
		</Box>
	)
}
export default ShowDetails;