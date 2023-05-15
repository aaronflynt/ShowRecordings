<?php
header("Content-Type: application/json");
class ShowFile
{
	public $name;
	public $size;
	public $modified;
}
function ReadFolderDirectory($dir, $listDir = array())
{
	$listDir = array();
	if ($handler = opendir($dir)) {
		while (($sub = readdir($handler)) !== FALSE) {
			if ($sub != "." && $sub != ".." && $sub != "assets" && $sub != ".htaccess" && $sub != "index.html" && $sub != "api.php") {
				if (is_file($dir . "/" . $sub)) {
					$showFile = new ShowFile();
					$showFile->name = $sub;
					$showFile->size = filesize($dir . "/" . $sub);
					$showFile->modified = filectime($dir . "/" . $sub);
					$listDir[] = $showFile;
				} elseif (is_dir($dir . "/" . $sub)) {
					$listDir[$sub] = ReadFolderDirectory($dir . "/" . $sub);
				}
			}
		}
		closedir($handler);
	}
	return $listDir;
}
$shows = ReadFolderDirectory("./");
echo json_encode($shows);
exit();
