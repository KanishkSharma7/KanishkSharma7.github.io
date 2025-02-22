import { useEffect, useState, useRef } from 'react';
import Card from 'react-card-component';
import Draggable from 'react-draggable';
import { isMobile } from 'react-device-detect';

const Welcome = (props) => {
  return (
    <div
      style={{
        height: 'fit-content',
        width: 'fit-content',
        textAlign: 'center',
        padding: '10px',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        bordered
        outlined
        glass
        glassOption={{ blur: 100, transparency: 0.2 }}
        style={{
          padding: '20px',
        }}
      >
        {/* <img height={200} src={require(`../../assets/me_2.png`)} /> */}
        <div style={{ color: 'whitesmoke' }}>
          <span
            style={{
              fontSize: '60px',
              fontWeight: 'bolder',
              fontStyle: 'italic',
            }}
          >
            <span style={{ color: '#4285F4' }}>H</span>
            <span style={{ color: '#DB4437' }}>e</span>
            <span style={{ color: '#F4B400' }}>l</span>
            <span style={{ color: '#4285F4' }}>l</span>
            <span style={{ color: '#0F9D58' }}>o</span>
            <span style={{ color: '#DB4437' }}>!</span>
          </span>
          <br />
          <span
            style={{
              fontSize: '24px',
            }}
          >
            My name is{' '}
            <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              Kanishk Sharma
            </span>{' '}
            and I am a{' '}
            <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Software Engineer</span>
            .
          </span>
          <br />
          <span
            style={{
              fontSize: '18px',
            }}
          >
            {isMobile
              ? 'Click anywhere to begin!'
              : 'Click anywhere to begin dragging, opening, and expanding folders + windows.'}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
