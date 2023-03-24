import React from 'react';
import logo from '@assets/img/logo.svg';

export default function Popup(): JSX.Element {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-gray-800 p-3 text-center">
            <header className="flex flex-col items-center justify-center text-white">
                <img
                    src={logo}
                    className="animate-spin-slow pointer-events-none h-36"
                    alt="logo"
                />
                <p>
                    Edit <code>src/pages/popup/Popup.jsx</code> and save to
                    reload.
                </p>
                <a
                    className="text-blue-400"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React!
                </a>
                <p>Popup styled with TailwindCSS!</p>
            </header>
        </div>
    );
}
