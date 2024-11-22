// Typewriter.tsx
import React, { useEffect } from 'react';
import Typed from 'typed.js';

interface TypewriterProps {
    strings: string; // Comma-separated string for the items
    className?: string; // Custom class for styling
    color?: string; // Custom color for text
    border?: string; // Custom border style
    shadow?: string; // Custom text shadow
}

const Typewriter: React.FC<TypewriterProps> = ({ strings, className, color, border, shadow }) => {
    useEffect(() => {
        const typed = document.querySelector('.typed');

        if (typed) {
            const typedStrings = strings.split(','); // Split the strings by comma
            const options = {
                strings: typedStrings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                showCursor: true,
                cursorChar: '|',
            };

            // Initialize Typed.js
            const typedInstance = new Typed(typed, options);

            // Cleanup on unmount
            return () => {
                typedInstance.destroy();
            };
        }
    }, [strings]);

    return (
        <span
            className={className}
            style={{
                color: color || 'inherit',
                border: border || 'none',
                textShadow: shadow || 'none',
                display: 'inline-block', // Ensures border wraps text properly
                padding: '6px', // Optional padding for aesthetics
                fontFamily: 'Outfit', // Added font-family
                marginLeft: '4px', // Added margin-left
            }}
        >
            <span className="typed" style={{ color }} /> {/* Apply color here */}
        </span>
    );
};

export default Typewriter;