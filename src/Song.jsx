export const Song = ({ id, title, duration, artist, onDelete, onMove, onMoveDown, isPlaylist }) => {
    return (
        <div className="song">
            <p><i>{title} </i> </p>
            <strong>By {artist} </strong>
            <small>{duration} mins </small>
            <button onClick={() => onDelete(id)} className="dlt">Delete</button>
            {!isPlaylist && <button onClick={() => onMove(id)} className="move">Move</button>}
            {isPlaylist && <button onClick={() => onMoveDown(id)} className="move-down">Move Down</button>}
        </div>
    );
};
