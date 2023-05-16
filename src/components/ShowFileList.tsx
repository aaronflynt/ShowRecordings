import { ShowFile } from '../types/Show';
import ShowFileDetails from './ShowFileDetails';
import formatBytes from '../utils/formatBytes.ts';
import { List, ListItemButton, ListItemIcon, Icon, ListItemText } from '@mui/material';

interface ShowFileListProps {
	showFiles: ShowFile[];
	selectedFile: ShowFile | null;
	setSelectedFile: Function;
}

function ShowFileList({ showFiles, selectedFile, setSelectedFile }: ShowFileListProps) {
	return (
		<List>
			{showFiles.map((showFile: ShowFile) =>
				<ListItemButton key={showFile.name} onClick={() => setSelectedFile(showFile)} divider={true}>
					<ListItemIcon>
						<Icon>music_note</Icon>
					</ListItemIcon>
					<ListItemText
						primary={showFile.name}
						secondary={`Size: ${formatBytes(showFile.size)} - Last Modified: ${(new Date(showFile.modified * 1000)).toLocaleString()}`}
					/>
					{(selectedFile == showFile) && (
						<ShowFileDetails file={showFile} />
					)}
				</ListItemButton>
			)}
		</List>
	)
}
export default ShowFileList;