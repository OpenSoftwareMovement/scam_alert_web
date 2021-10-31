import React from 'react';
import PropTypes from 'prop-types';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <button>
                    Report Abuse
                </button>
            </div>
        );
    }
}

Report.propTypes = {};

export default Report;
