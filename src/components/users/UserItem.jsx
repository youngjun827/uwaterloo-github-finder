import React from 'react'
import PropTypes from 'prop-types'
// A JavaScript date library for parsing, validating, manipulating, and formatting dates.
import moment from 'moment'

function UserItem({user: {name, description, pushed_at, owner,}} ) {

    return (
        <div className="stats shadow">

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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="text-primary text-4xl font-bold">Repo Name: {name}</div>
                <div className="">{description}</div>
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