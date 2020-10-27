import React from 'react' 
import '../style/Profile.css'

class Profile extends React.Component {
    render() {
        return(
            <div className="profile-holder">
                <div>
                    <h1 className="profile-name">Filip Martin Jose</h1>
                    <p className="profile-location">Los Angeles</p>
                </div>
                <button className='pro-btn'>Pro Level</button>
                <div className='follower-holder'>
                    <p className="followers-head">Followers</p>
                    <h2 className="follower-count">980</h2>
                </div>
                <div className="project-holder">
                    <p className="projects-head">Projects</p>
                    <h2 className="projects-count">142</h2>
                </div>
                <div className='rank-holder'>
                    <p className="rank-head">Rank</p>
                    <h2 className="rank-count">129</h2>
                </div>
            </div>
        )
    }
}

export default Profile