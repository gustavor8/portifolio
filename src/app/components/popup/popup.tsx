import PopupProps from "./popupTypes";

export default function Popup({ isOpen, onClose, title, content }: PopupProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        {/* Cabeçalho do pop-up */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-center w-full text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✖
          </button>
        </div>

        {/* Conteúdo do pop-up */}
        <p className="text-gray-700 text-center dark:text-gray-300">
          {content}
        </p>
      </div>
    </div>
  );
}
