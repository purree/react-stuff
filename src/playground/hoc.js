import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is for your eyes only!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} />: <p>Please login!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the details" />, document.getElementById('app'));
