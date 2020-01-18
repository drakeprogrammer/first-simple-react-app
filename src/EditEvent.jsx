import React from "react";

const EditEnv = () => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name">name</label>
                <input id="name" type="text" name="name" />
            </div>

            <div className="edit-event__input-group">
                <label htmlFor="hour">hour</label>
                <input id="hour" type="tel" name="hour" />
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="minute">minute</label>
                <input id="minute" type="tel" name="minute" />
            </div>
            <button>OK</button>
            <button>Cancel</button>
        </div>
    )
};

export default EditEnv;