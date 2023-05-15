import { Show, ShowFile } from '../types/Show';
import ShowFileList from './ShowFileList';
import { Accordion, AccordionSummary, Icon, Typography, Stack, AccordionDetails } from '@mui/material';

interface ShowSetListProps {
	shows: Show[];
	selectedFile: ShowFile | null;
	setSelectedFile: Function;
}

function ShowSetList({ shows, selectedFile, setSelectedFile}: ShowSetListProps) {
	return (
		<>
			{shows.map((subShow: Show) =>
				<Accordion key={subShow.name}>
					<AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
						<Typography variant="h6" component="h1" gutterBottom>
							<Stack direction="row" alignItems="center">
								<Icon sx={{ mr: 2 }}>queue_music</Icon>
								{subShow.name}
							</Stack>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ShowFileList showFiles={subShow.files} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
					</AccordionDetails>
				</Accordion>
			)}
		</>
	)
}
export default ShowSetList;