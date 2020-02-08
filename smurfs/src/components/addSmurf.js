import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

const AddSmurf = props => {

    const [newSmurf, setNewSmurf] = useState();

    const handleChanges = e => {
        setNewSmurf(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.addSmurf(newSmurf);
    }

    return (
    <>
        <input type='text' value={newSmurf} onChange={handleChanges} placeholder='smurf name'/>
        <input type='text' value={newSmurf} onChange={handleChanges} placeholder='smurf age'/>
        <input type='text' value={newSmurf} onChange={handleChanges} placeholder='smurf height'/>
        <button onClick={handleSubmit}>Add smurf</button>
    </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        name: state.name,
        age: state.age,
        height: state.height
    }
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(AddSmurf);