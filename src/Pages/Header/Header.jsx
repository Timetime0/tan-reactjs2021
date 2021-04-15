import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/bt2_glasses">TimeTime</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item active">
                            <NavLink className="nav-link" to="/bt2_glasses">Home <span className="sr-only">(current)</span></NavLink>
                        </li> */}

                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{cursor:'pointer'}}>HomeWorks</div>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/baitap1home">BT1</NavLink>
                                <NavLink className="dropdown-item" to="/baitap2">BT2 - Glasses</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="dropdownId1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{cursor:'pointer'}}>Class</div>
                            <div className="dropdown-menu " aria-labelledby="dropdownId1">
                                <NavLink className="dropdown-item" to="/baitap1">DivComponent</NavLink>
                                <NavLink className="dropdown-item" to="/showroomcard">ShowRoomCard</NavLink>
                                <NavLink className="dropdown-item" to="/parent">Props</NavLink>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
