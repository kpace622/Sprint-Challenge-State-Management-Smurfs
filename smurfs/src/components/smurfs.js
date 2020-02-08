import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/index';

const Smurfs = props => {

    return (
        <>
            {props.error ? (
                <div>{props.error}</div>
            ) : (  
               props.smurfs.map(smurf => 
                    <div>
                        <h2>{smurf.name}</h2>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>)
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(Smurfs);