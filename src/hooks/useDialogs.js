import { useModals } from '@mattjennings/react-modal-stack';
import { AlertDialog, ConfirmDialog } from '@/components/dialogs';

export default function useDialogs() {
  const { openModal, closeModal } = useModals();

  const alert = (text, title = 'Lo sentimos.', aceptLabel = 'Entendido') => {
    openModal(AlertDialog, {
      title,
      text,
      aceptLabel,
    });
  };

  const confirm = ({ title, text, aceptLabel }) => {
    openModal(ConfirmDialog, {
      title,
      text,
      aceptLabel,
      onConfirm: async () => {
        closeModal();
      },
    });
  };

  return {
    openModal,
    closeModal,
    alert,
    confirm,
  };
}
