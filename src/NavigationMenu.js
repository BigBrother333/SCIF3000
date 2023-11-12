import React from 'react';

const NavigationMenu = () => {
    const buttonStyle = {
        color: 'white',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        marginRight: '20px', // Add margin-right to create space
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    };

    return (
        <div style={containerStyle}>
            <button onClick={() => (window.location.href = '/')} style={buttonStyle}>
                Home
            </button>
            <button onClick={() => (window.location.href = '/Emissions')} style={buttonStyle}>
                Emissions
            </button>
            <button onClick={() => (window.location.href = '/APVI')} style={buttonStyle}>
                APVI
            </button>
            <button onClick={() => (window.location.href = '/PV')} style={buttonStyle}>
                PV
            </button>
            <button onClick={() => (window.location.href = '/Solar')} style={buttonStyle}>
                Solar
            </button>
        </div>
    );
};

export default NavigationMenu;
