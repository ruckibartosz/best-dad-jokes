import PropTypes from "prop-types";

import JokeCard from "@components/JokeCard";

import "./DisplayJokes.css";

const DisplayJokes = ({
    jokes,
    onLikeJokeClick,
    onDeleteJokeClick,
    onEditJokeClick,
    showControls
}) => {
    const renderJokes = () => {
        if (jokes.length) {
            return jokes.map(({ setup, punchline, _id, canEdit }) => {
                return (
                    <JokeCard
                        id={_id}
                        onLikeClick={onLikeJokeClick}
                        onDeleteClick={onDeleteJokeClick}
                        onEditClick={onEditJokeClick}
                        key={_id}
                        setup={setup}
                        punchline={punchline}
                        showControls={showControls}
                        canEdit={canEdit}
                    />
                );
            });
        }

        return <h2>Nothing here :/</h2>;
    };

    return <div className="jokes-list">{renderJokes()}</div>;
};

DisplayJokes.propTypes = {
    jokes: PropTypes.array,
    onLikeJokeClick: PropTypes.func,
    onDeleteJokeClick: PropTypes.func,
    onEditJokeClick: PropTypes.func,
    showControls: PropTypes.bool
};

export default DisplayJokes;
