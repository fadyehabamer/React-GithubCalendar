import React from 'react'
import GitHubCalendar from 'react-github-calendar';


export default function Calendar(props) {
    return (
        <div className="calendar">
            <GitHubCalendar username={props.username} />
        </div>
    )


}
