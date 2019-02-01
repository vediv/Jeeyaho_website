<?php 
if(isset($_POST["url"]) && $_POST["url"]!="" && $_POST["url"]!=null)
{
$playlists = file($_POST["url"]);
echo "<pre>";
print_r($lines);
echo "</pre>";
}
else
{
echo false;
return false;
}
