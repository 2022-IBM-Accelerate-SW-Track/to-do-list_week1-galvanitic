import React, { Component } from 'react';
import './About.css';
import Bio from '../component/Bio';
import ProfilePicture from '../assets/profile.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={ProfilePicture}
              alt="Profile Pic"
              >
              </img>
          </div>
        </div>
        <Bio />
      </div>
    )
  }
}