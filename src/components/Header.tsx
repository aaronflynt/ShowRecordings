import { Icon, Typography, AppBar, Button, Container, Toolbar } from '@mui/material';

interface HeaderProps {
	reloadDate: Date;
	setReloadDate: Function;
}

function Header({ reloadDate, setReloadDate }: HeaderProps) {
	return (
		<AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {import.meta.env.VITE_APP_TITLE}
                    </Typography>
                    <Button onClick={() => setReloadDate(new Date())} color="inherit">
                        <Typography sx={{mr: 2}}>
                            as of {reloadDate.toLocaleString()}
                        </Typography>
                        <Icon>refresh</Icon>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
	)
}
export default Header;