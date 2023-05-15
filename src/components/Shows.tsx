import { Show, ShowFile } from '../types/Show';
import ShowDetails from './ShowDetails';
import Navigation from './Navigation';
import { Box, List, ListItemButton, ListItemIcon, Icon, ListItemText } from '@mui/material';

interface ShowsProps {
	shows: Show[];
	selectedShow: Show | null;
	setSelectedShow: Function;
	selectedFile: ShowFile | null;
	setSelectedFile: Function;
}

function Shows({ shows, selectedShow, setSelectedShow, selectedFile, setSelectedFile }: ShowsProps) {
	return (
		<Box>
			<Navigation selectedShow={selectedShow} setSelectedShow={setSelectedShow} />
			{selectedShow && (
				<ShowDetails show={selectedShow} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			)}
			{!selectedShow && (
				<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
					{shows.map((show: Show) =>
						<ListItemButton key={show.name} onClick={() => setSelectedShow(show)} divider={true}>
							<ListItemIcon>
								{show.files.length > 0 && (
									<Icon>queue_music</Icon>
								)}
								{show.shows.length > 0 && (
									<Icon>library_music</Icon>
								)}
							</ListItemIcon>
							<ListItemText 
								primary={show.name} 
								secondary={show.files.length > 0 ? `${show.files.length} file(s)` : `${show.shows.length} set(s)`}
							/>
						</ListItemButton>
					)}
				</List>
			)}
		</Box>
	)
}
export default Shows;