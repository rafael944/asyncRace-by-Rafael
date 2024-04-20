export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
}
