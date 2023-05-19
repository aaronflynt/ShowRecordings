import { ShowFile } from '../types/Show';
import formatBytes from '../utils/formatBytes.ts';
import { List, ListItemButton, ListItemIcon, Icon, ListItemText } from '@mui/material';

interface ShowFileListProps {
	showFiles: ShowFile[];
	selectedFile: ShowFile | null;
	setSelectedFile: Function;
}

function ShowFileList({ showFiles, setSelectedFile }: ShowFileListProps) {
	const selectFile = async (file: ShowFile) => {
		await setSelectedFile(null);
		await setSelectedFile(file);
	}

	return (
		<List>
			{showFiles.map((showFile: ShowFile) =>
				<ListItemButton key={showFile.name} onClick={() => selectFile(showFile)} divider={true}>
					<ListItemIcon>
						<Icon>music_note</Icon>
					</ListItemIcon>
					<ListItemText
						primary={showFile.name}
						secondary={`Size: ${formatBytes(showFile.size)} - Last Modified: ${(new Date(showFile.modified * 1000)).toLocaleString()}`}
					/>
				</ListItemButton>
			)}
		</List>
	)
}
export default ShowFileList;