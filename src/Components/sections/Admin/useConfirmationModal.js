import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * A reusable confirmation modal hook.
 * @returns {Function} showConfirm
 */
const useConfirmationModal = () => {
  /**
   * Display confirmation modal.
   * @param {string} title - Modal title.
   * @param {string} content - Modal content/message.
   * @param {Function} onConfirm - Callback function on confirmation.
   */
  const showConfirm = ({ title, content, onConfirm }) => {
    Modal.confirm({
      title: title || "Are you sure?",
      // icon: <ExclamationCircleOutlined />,
      content: content || "Do you really want to proceed?",
      okText: "Yes",
      cancelText: "Cancel",
      okType: "danger",
      onOk: onConfirm,
      onCancel: () => console.log("Action cancelled"),
    });
  };

  return { showConfirm };
};

export default useConfirmationModal;
