import React from 'react';

class Nav extends React.Component {
  render() {
    const { toggleForm, showForm } = this.props;

    return (
       <div className="nav-container">
          <div className="nav-logo">Vote Now</div>
          <div className="nav-button" onClick={() => toggleForm()} >
            { showForm ? 'Cancel' : '+ Create a Poll' }
          </div>
       </div>
    );
  }
}

export default Nav;
