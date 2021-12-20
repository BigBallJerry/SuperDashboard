import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="tobbar">
            <div className="topbarWrapper">
                <div className='topLeft'>
                    <span className='logo'>mydashboard</span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1639914592~hmac=3552cfd8b8248f58ef43a7eefc67da08" alt="" className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
