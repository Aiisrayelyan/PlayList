import { Song } from "./Song";

export const PlayList = ({ items, onDelete, onMoveDown }) => {
    return (
        <div>
            <h1>Play List:</h1>
            {items.map(elm => (
                <Song
                    key={elm.id}
                    {...elm}
                    onDelete={onDelete}
                    onMoveDown={onMoveDown}
                    isPlaylist={true}
                />
            ))}
        </div>
    );
};
