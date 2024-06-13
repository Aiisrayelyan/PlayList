import { useState } from 'react';
import { SongList } from './SongList';
import { PlayList } from './PlayList';
import './App.css';

function App() {
    const [songs, setSongs] = useState([
        { id: 101, title: "Symphony No.40", artist: "Mozart", duration: 20 },
        { id: 102, title: "Symphony No.16", artist: "Mozart", duration: 27 },
        { id: 103, title: "Symphony No.41", artist: "Mozart", duration: 24 },
        { id: 104, title: "Symphony No.32", artist: "Mozart", duration: 30 }
    ]);

    const [playlist, setPlaylist] = useState([]);

    const removeSong = id => {
        setSongs(songs.filter(x => x.id !== id));
    };

    const addToPlaylist = id => {
        const song = songs.find(x => x.id === id);
        if (song && !playlist.find(x => x.id === id)) {
            setPlaylist([...playlist, song]);
        }
    };

    const moveDownInPlaylist = id => {
        const index = playlist.findIndex(x => x.id === id);
        if (index < playlist.length - 1) {
            const newPlaylist = [...playlist];
            [newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]];
            setPlaylist(newPlaylist);
        }
    };

    const removeSongFromPlaylist = id => {
        setPlaylist(playlist.filter(x => x.id !== id));
    };

    return (
        <div className='base'>
            <SongList
                items={songs}
                onDelete={removeSong}
                onMove={addToPlaylist}
            />
            <PlayList
                items={playlist}
                onDelete={removeSongFromPlaylist}
                onMoveDown={moveDownInPlaylist}
            />
        </div>
    );
}

export default App;
