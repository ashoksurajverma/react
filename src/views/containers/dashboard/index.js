import React, { Component } from "react";
import './index.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2 className="dashboard-heading"> DASHBOARD </h2>
        <p>Welcome to the <span>B-Fresh</span> Dashboard</p>
      </div>
    );
  }
}
