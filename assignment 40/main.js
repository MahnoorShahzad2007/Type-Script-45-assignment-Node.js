function make_album(artistName, albumTitle, tracks) {
    var album;
    album = {
        artist: artistName,
        titleAlbum: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Asim Azhar", "Album title 1");
var album2 = make_album("Talwinder", "album title 2");
var album3 = make_album("Hassan Raheem", "album title 3");
console.log(album1);
console.log(album2);
console.log(album3);
