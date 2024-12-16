export default interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}
