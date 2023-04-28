import { useState } from "react";
import PropTypes from "prop-types";
import { AiFillLike, AiFillDelete, AiFillEdit } from "react-icons/ai";

import Button from "@components/Button";
import useJokesState from "@hooks/useJokesState";

import "./JokeCard.css";

const JokeCard = ({
    setup,
    punchline,
    onLikeClick,
    onDeleteClick,
    onEditClick,
    key,
    id,
    showControls = false,
    canEdit = false
}) => {
    const { jokes } = useJokesState();

    const [isJokeAdded, setIsJokeAdded] = useState(
        jokes.find((joke) => joke._id === id)
    );

    const handleOnLikeButtonClick = () => {
        if (isJokeAdded) return null;
        setIsJokeAdded(true);
        onLikeClick({ _id: id, setup, punchline });
    };

    const renderControls = () => {
        if (showControls) {
            return (
                <>
                    {canEdit && (
                        <Button
                            onClick={() => onEditClick(id)}
                            text="Edit"
                            icon={<AiFillEdit size={22} />}
                        />
                    )}
                    <Button
                        onClick={() =>
                            onDeleteClick({ _id: id, setup, punchline })
                        }
                        text="Delete"
                        icon={<AiFillDelete size={22} />}
                    />
                </>
            );
        }

        return (
            <Button
                className={isJokeAdded ? "active" : ""}
                onClick={handleOnLikeButtonClick}
                text="I like it!"
                icon={<AiFillLike size={22} />}
            />
        );
    };

    return (
        <div key={key} className="joke-card">
            <div className="joke-card__information">
                <div className="information__setup">{setup}</div>
                <div className="information__punchline">
                    <i>{punchline}</i>
                </div>
            </div>
            <div className="joke-card__control">{renderControls()}</div>
        </div>
    );
};

JokeCard.propTypes = {
    id: PropTypes.string,
    key: PropTypes.string,
    setup: PropTypes.string,
    punchline: PropTypes.string,
    onLikeClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func,
    showControls: PropTypes.bool,
    canEdit: PropTypes.bool
};

export default JokeCard;
