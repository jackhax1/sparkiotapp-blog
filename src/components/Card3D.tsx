import { Card } from "antd";
import { useRef,ReactNode  } from "react";

interface Card3DProps {
    children: ReactNode; // Accepts any content inside the card
  }

const Card3D: React.FC<Card3DProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const rotateToMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;

    const rotateX = y * -30; // Adjust tilt effect
    const rotateY = x * 30;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const removeListener = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={rotateToMouse}
      onMouseLeave={removeListener}
      className="card3d"
    >
      <Card hoverable bordered={true} className="mini-card">
        {children}
      </Card>
    </div>
  );
};

export default Card3D;
