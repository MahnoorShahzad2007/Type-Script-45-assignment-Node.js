function make_album(artistName : string , albumTitle : string , tracks?:number){
    let album : {
        artist: String,
        titleAlbum: string,
        tracks?: number,
                }

album = {
    artist : artistName,
    titleAlbum : albumTitle,
        };

if(tracks !== undefined){
    album.tracks = tracks;
}
    return album;
}
 let album1 = make_album  ("Asim Azhar","Album title 1");

 let album2 = make_album ("Talwinder","album title 2");

 let album3 = make_album ("Hassan Raheem","album title 3");

 console.log(album1);
 console.log(album2);
 console.log(album3);