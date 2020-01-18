import React from "react";
// import PropTypes from "prop-types";

const EditEnv = props => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name">name</label>
                <input id="name"
                       type="text"
                       name="name"
                       onChange={e => props.onInputChange({ [e.target.name]: e.target.value})}/>
        </div>
            <div className="edit-event__input-group">
                <label htmlFor="hour">hour</label>
                <input id="hour" type="tel" name="hour"
                       onChange={e => props.onInputChange({ [e.target.name]: e.target.value})}
                />
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="minute">minute</label>
                <input id="minute" type="tel" name="minute"
                       onChange={e => props.onInputChange({ [e.target.name]: e.target.value})}
                />
            </div>
            <button onClick={() => props.onSave()}>OK</button>
            <button>Cancel</button>
        </div>
    )
};

export default EditEnv;