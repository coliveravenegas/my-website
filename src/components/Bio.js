import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Carlos Olivera Venegas`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 350 }}>
          Personal blog by{' '}
          <a href="https://twitter.com/CarlosOliveraVe">
            Carlos Olivera Venegas
          </a>{' '}
          <br />I like to learn and teach
        </p>
      </div>
    );
  }
}

export default Bio;
