import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import { Modal } from "@components/Modal";
import useJokesAction from "@hooks/useJokesAction";
import Input from "@components/Input";
import Button from "@components/Button";

const JokeModal = ({
    isActive,
    setupVal,
    punchlineVal,
    setupSetter,
    punchlineSetter,
    jokeId,
    isActiveSetter
}) => {
    const { addJoke, editJoke } = useJokesAction();

    const handleOnSetupChange = (ev) => setupSetter(ev.target.value);
    const handleOnPunchlineChange = (ev) => punchlineSetter(ev.target.value);
    const handleOnSaveButtonClick = () => {
        if (jokeId) {
            editJoke(jokeId, {
                _id: jokeId,
                setup: setupVal,
                punchline: punchlineVal,
                canEdit: true
            });

            isActiveSetter(false);
            return;
        }

        addJoke({
            _id: uuidv4(),
            setup: setupVal,
            punchline: punchlineVal,
            canEdit: true
        });

        isActiveSetter(false);
    };
    const handleOnCancelButtonClick = () => isActiveSetter(false);

    return (
        <Modal.Container isActive={isActive}>
            <Modal.Header>{jokeId ? "Edit joke" : "Create joke"}</Modal.Header>
            <Modal.Body>
                <Input
                    val={setupVal}
                    type="text"
                    placeholder="Enter setup"
                    setter={handleOnSetupChange}
                />
                <Input
                    val={punchlineVal}
                    type="text"
                    placeholder="Enter punchline"
                    setter={handleOnPunchlineChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={handleOnCancelButtonClick}
                    text="Cancel"
                    icon={<AiOutlineClose size={22} />}
                />
                <Button
                    onClick={handleOnSaveButtonClick}
                    text="Save"
                    icon={<AiOutlinePlus size={22} />}
                    disabled={!setupVal.length || !punchlineVal.length}
                />
            </Modal.Footer>
        </Modal.Container>
    );
};

JokeModal.propTypes = {
    isActive: PropTypes.bool,
    punchlineVal: PropTypes.string,
    setupVal: PropTypes.string,
    punchlineSetter: PropTypes.func,
    setupSetter: PropTypes.func,
    isActiveSetter: PropTypes.func,
    jokeId: PropTypes.string
};

export default JokeModal;
