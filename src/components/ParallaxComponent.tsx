import { useEffect, useRef } from 'react';

interface MyButtonProps {
    /** The text to display inside the button */
    imageUrl: string;
    /** Whether the button can be interacted with */
    height: string;
    overlayColor: string;
    parallaxSpeed: number;

  }

const ParallaxContainer = ({imageUrl,height,overlayColor,parallaxSpeed}:MyButtonProps) => {
    const containerRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef(null as any);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !imageRef.current) return;

            const container = containerRef.current;
            const image = imageRef.current;

            const rect = container.getBoundingClientRect();
            const scrollPosition = window.pageYOffset;
            const containerTop = rect.top + scrollPosition;

            // Check if container is in viewport
            if (
                scrollPosition + window.innerHeight > containerTop &&
                scrollPosition < containerTop + rect.height
            ) {
                const parallaxOffset = (scrollPosition - containerTop) * parallaxSpeed;
                image.style.transform = `translateY(${parallaxOffset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial position check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [parallaxSpeed]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ height }}
        >
            <img
                ref={imageRef}
                src={imageUrl}
                alt="Parallax Background"
                className="absolute top-0 left-0 w-full object-cover transition-transform duration-200 ease-out"
                style={{ height: '120%' }}
            />
            {overlayColor && (
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: overlayColor }}
                />
            )}
        </div>
    );
};

export default ParallaxContainer;