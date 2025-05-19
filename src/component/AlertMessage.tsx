import  { useEffect } from "react";

interface AlertMessageProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

const alertColors = {
  success: "bg-green-500 text-white",
  error: "bg-white text-black",
  info: "bg-blue-500 text-white",
};

export default function AlertMessage({
  message,
  type = "info",
  onClose,
}: AlertMessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed  top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg  overflow-hidden ${alertColors[type]}`}
      role="alert"
      aria-live="assertive"
      style={{ width: "300px" }}
    >
      {message}
      <span
        className="absolute bottom-0 left-0 h-1 bg-red-600"
        style={{
          animation: "borderSlide 3s linear forwards",
          width: 0,
          display: "block",
        }}
      />
      <style>{`
        @keyframes borderSlide {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
