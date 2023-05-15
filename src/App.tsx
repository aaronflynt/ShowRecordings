import Header from './components/Header';
import Shows from './components/Shows';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import useShows from './hooks/useShows';
import { Alert, Backdrop, Box, CircularProgress, Container, CssBaseline } from '@mui/material';
import { Show, ShowFile } from './types/Show';

function App() {
	const { loading, error, shows, reloadDate, setReloadDate } = useShows();

	const [selectedShow, setSelectedShow] = useState<Show | null>(null);
	const [selectedFile, setSelectedFile] = useState<ShowFile | null>(null);

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header reloadDate={reloadDate} setReloadDate={setReloadDate} />
			<Container maxWidth="xl">
				<Box sx={{ my: 4 }}>
					<Shows 
						shows={shows} 
						selectedShow={selectedShow} 
						setSelectedShow={setSelectedShow}
						selectedFile={selectedFile}
						setSelectedFile={setSelectedFile}
					/>
					{error && (
						<Alert severity="error">{error}</Alert>
					)}
					<Backdrop open={loading}>
						<CircularProgress color="inherit" />
					</Backdrop>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default App
