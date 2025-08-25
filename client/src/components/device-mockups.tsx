import { useState } from "react";

interface DeviceMockupsProps {
  type: "mobile" | "monitor";
  interactive?: boolean;
  onClick?: () => void;
  content?: string;
  className?: string;
}

export default function DeviceMockups({ 
  type, 
  interactive = false, 
  onClick, 
  content = "Dashboard Interface",
  className = ""
}: DeviceMockupsProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  if (type === "mobile") {
    return (
      <div 
        className={`mobile-mockup mx-auto hover-lift ${interactive ? 'cursor-pointer' : ''} ${className}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid="mobile-mockup"
      >
        <div className="mobile-screen p-4 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-4">📱</div>
            <div className="text-sm font-medium">{content}</div>
            {isHovered && interactive && (
              <div className="mt-2 text-xs text-brand-green">Click to interact</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`monitor-mockup mx-auto hover-lift ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="monitor-mockup"
    >
      <div className="monitor-screen p-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-6xl mb-4">🖥️</div>
          <div className="text-lg font-medium">{content}</div>
          {isHovered && interactive && (
            <div className="mt-2 text-sm text-brand-green">Click to interact</div>
          )}
        </div>
      </div>
      <div className="monitor-stand"></div>
    </div>
  );
}
