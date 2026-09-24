import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';


export default function Calendar(props) {
    return (
        <div className="calendar">
            {/* v5 follows the OS light/dark setting by default; v3 was always light. */}
            <GitHubCalendar username={props.username} colorScheme="light" />
        </div>
    )


}
