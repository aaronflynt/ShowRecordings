import { useEffect, useState } from 'react'
import { Show, ShowFile } from '../types/Show';
import ErrorResponse from '../types/ErrorResponse';

function getShowsFromJson(json: any, parentShowName: string | null = null) {
	const showNames = Object.keys(json);
	let apiShows: Show[] = [];
	apiShows = showNames.map((showName) => {
		let files: ShowFile[] = [];
		let subShows: Show[] = [];
		if (json[showName].map) {
			files = json[showName].map((file: any) => {
				if (typeof (file) === 'object') {
					const showFile = file as ShowFile;
					if (parentShowName)
						showFile.url = `${import.meta.env.VITE_SHOW_FILES_ROOT_URL}/${parentShowName}/${showName}/${showFile.name}`;
					else
						showFile.url = `${import.meta.env.VITE_SHOW_FILES_ROOT_URL}/${showName}/${showFile.name}`;

					return file as ShowFile;
				}
				else return null;
			})
		} else {
			subShows = getShowsFromJson(json[showName], showName).sort((a, b) => a.name.localeCompare(b.name));
		}
		return {
			name: showName,
			files: files.sort((a, b) => a.name.localeCompare(b.name)),
			shows: subShows.sort((a, b) => a.name.localeCompare(b.name))
		}
	});
	return apiShows.sort((a, b) => a.name.localeCompare(b.name));
}

export default function useShows() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [shows, setShows] = useState<Show[]>([]);
    const [reloadDate, setReloadDate] = useState(new Date());

	useEffect(() => {
		async function getShows() {
			setLoading(true);
			setError("");
			setShows([]);
			try {
				const response = await fetch(
					import.meta.env.VITE_SHOW_FILES_API_URL
				);
				if (response.ok) {
					const json = await response.json();
					const apiShows = getShowsFromJson(json);
					setShows(apiShows);
				} else {
					const json: ErrorResponse = await response.json();
					setError(`Error getting Shows... - ${json.detail}`);
				}
			} catch (e) {
				const error = e as Error;
				setError(`Error getting Shows... - ${error.message}`);
			}
			setLoading(false);
		}
		getShows();
	}, [reloadDate]);

	return {
		loading,
		error,
		shows,
        reloadDate,
        setReloadDate
	};
}