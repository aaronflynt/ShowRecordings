import { Breadcrumbs, Link, Icon, Typography } from '@mui/material';
import { Show } from '../types/Show';

interface NavigationProps {
	selectedShow: Show | null;
	setSelectedShow: Function;
}

function Navigation({ selectedShow, setSelectedShow }: NavigationProps) {
	return (
		<Breadcrumbs sx={{ mb: 2 }}>
			<Link 
				key="1"
				underline="hover" 
				color={selectedShow ? 'inherit' : 'text.primary'}
				onClick={() => setSelectedShow(null)} 
				sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
			>
				<Icon sx={{ mr: 0.5 }} fontSize="inherit">home</Icon>
				Shows
			</Link>
			{selectedShow && (
				<Typography sx={{ display: 'flex', alignItems: 'center' }} key="2" color="text.primary">
					{selectedShow.files.length > 0 && (
						<Icon sx={{ mr: 0.5 }} fontSize="inherit">queue_music</Icon>
					)}
					{selectedShow.shows.length > 0 && (
						<Icon sx={{ mr: 0.5 }} fontSize="inherit">library_music</Icon>
					)}
					{selectedShow.name}
				</Typography>
			)}
		</Breadcrumbs>
	)
}
export default Navigation;