import React from 'react'
import PropTypes from 'prop-types'
// A JavaScript date library for parsing, validating, manipulating, and formatting dates.
import moment from 'moment'

function UserItem({user: {name, description, pushed_at, owner, html_url}} ) {

    return (
        <div className="stats shadow stats-vertical lg:stats-horizontal border-2 border-[#423F00]">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={owner.avatar_url} />
                    </div>
                    </div>
                </div>

                <div className="stat-value">{owner.login}</div>
                <div className="stat-title">Owner's Repo: <a className="font-bold opacity-100 text-[#3F00FF]"href={owner.html_url}>Click me!</a></div>
                <div className="stat-desc text-secondary">{owner.type}</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-primary">
                    <a href={html_url} target='_blank'>
                        <span className="badge">Repo Link</span>
                    </a>
                </div>
                <div className="text-primary text-4xl font-bold">Repo Name: {name}</div>
                <div>{description}</div>
                                                 {/* Display ~timeago: https://momentjs.com/docs/ */}
                <div className="stat-desc">Updated: {moment(pushed_at).fromNow()} </div>
            </div>

        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}


export default UserItem