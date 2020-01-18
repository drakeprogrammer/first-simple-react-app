import React from "react";

const EditEnv = () => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name">name</label>
                <input id="name" type="text" name="name" />
            </div>
        </div>
    )
};

export default EditEnv;