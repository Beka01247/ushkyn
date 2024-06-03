import {
  Box,
  Button,
  Group,
  Modal,
  createUseExternalEvents,
  getDefaultZIndex
} from "./chunk-F6YLG7IS.js";
import {
  randomId
} from "./chunk-RVCDVWEE.js";
import {
  require_jsx_runtime
} from "./chunk-XKNC3ECD.js";
import "./chunk-CRS3CFTV.js";
import "./chunk-VSK6FCDQ.js";
import {
  __toESM,
  require_react
} from "./chunk-M47QXNUA.js";

// node_modules/@mantine/modals/esm/ModalsProvider.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@mantine/modals/esm/ConfirmModal.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/modals/esm/use-modals/use-modals.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@mantine/modals/esm/context.mjs
var import_react = __toESM(require_react(), 1);
var ModalsContext = (0, import_react.createContext)(null);
ModalsContext.displayName = "@mantine/modals/ModalsContext";

// node_modules/@mantine/modals/esm/use-modals/use-modals.mjs
function useModals() {
  const ctx = (0, import_react2.useContext)(ModalsContext);
  if (!ctx) {
    throw new Error(
      "[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component"
    );
  }
  return ctx;
}

// node_modules/@mantine/modals/esm/ConfirmModal.mjs
function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: "", confirm: "" },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children
}) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();
  const handleCancel = (event) => {
    typeof (cancelProps == null ? void 0 : cancelProps.onClick) === "function" && (cancelProps == null ? void 0 : cancelProps.onClick(event));
    typeof onCancel === "function" && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };
  const handleConfirm = (event) => {
    typeof (confirmProps == null ? void 0 : confirmProps.onClick) === "function" && (confirmProps == null ? void 0 : confirmProps.onClick(event));
    typeof onConfirm === "function" && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    children && (0, import_jsx_runtime.jsx)(Box, { mb: "md", children }),
    (0, import_jsx_runtime.jsxs)(Group, { justify: "flex-end", ...groupProps, children: [
      (0, import_jsx_runtime.jsx)(Button, { variant: "default", ...cancelProps, onClick: handleCancel, children: (cancelProps == null ? void 0 : cancelProps.children) || cancelLabel }),
      (0, import_jsx_runtime.jsx)(Button, { ...confirmProps, onClick: handleConfirm, children: (confirmProps == null ? void 0 : confirmProps.children) || confirmLabel })
    ] })
  ] });
}

// node_modules/@mantine/modals/esm/events.mjs
var [useModalsEvents, createEvent] = createUseExternalEvents("mantine-modals");
var openModal = createEvent("openModal");
var closeModal = createEvent("closeModal");
var closeAllModals = createEvent("closeAllModals");
var openConfirmModal = createEvent("openConfirmModal");
var openContextModal = (payload) => createEvent("openContextModal")(payload);
var modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal
};

// node_modules/@mantine/modals/esm/reducer.mjs
function handleCloseModal(modal, canceled) {
  var _a, _b, _c, _d;
  if (canceled && modal.type === "confirm") {
    (_b = (_a = modal.props).onCancel) == null ? void 0 : _b.call(_a);
  }
  (_d = (_c = modal.props).onClose) == null ? void 0 : _d.call(_c);
}
function modalsReducer(state, action) {
  switch (action.type) {
    case "OPEN": {
      return {
        current: action.modal,
        modals: [...state.modals, action.modal]
      };
    }
    case "CLOSE": {
      const modal = state.modals.find((m) => m.id === action.modalId);
      if (!modal) {
        return state;
      }
      handleCloseModal(modal, action.canceled);
      const remainingModals = state.modals.filter((m) => m.id !== action.modalId);
      return {
        current: remainingModals[remainingModals.length - 1] || state.current,
        modals: remainingModals
      };
    }
    case "CLOSE_ALL": {
      if (!state.modals.length) {
        return state;
      }
      state.modals.concat().reverse().forEach((modal) => {
        handleCloseModal(modal, action.canceled);
      });
      return {
        current: state.current,
        modals: []
      };
    }
    default: {
      return state;
    }
  }
}

// node_modules/@mantine/modals/esm/ModalsProvider.mjs
function separateConfirmModalProps(props) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }
  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels,
    ...others
  } = props;
  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels
    },
    modalProps: {
      id,
      ...others
    }
  };
}
function ModalsProvider({ children, modalProps, labels, modals: modals2 }) {
  const [state, dispatch] = (0, import_react3.useReducer)(modalsReducer, { modals: [], current: null });
  const stateRef = (0, import_react3.useRef)(state);
  stateRef.current = state;
  const closeAll = (0, import_react3.useCallback)(
    (canceled) => {
      dispatch({ type: "CLOSE_ALL", canceled });
    },
    [stateRef, dispatch]
  );
  const openModal2 = (0, import_react3.useCallback)(
    ({ modalId, ...props }) => {
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "content",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openConfirmModal2 = (0, import_react3.useCallback)(
    ({ modalId, ...props }) => {
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "confirm",
          props
        }
      });
      return id;
    },
    [dispatch]
  );
  const openContextModal2 = (0, import_react3.useCallback)(
    (modal, { modalId, ...props }) => {
      const id = modalId || randomId();
      dispatch({
        type: "OPEN",
        modal: {
          id,
          type: "context",
          props,
          ctx: modal
        }
      });
      return id;
    },
    [dispatch]
  );
  const closeModal2 = (0, import_react3.useCallback)(
    (id, canceled) => {
      dispatch({ type: "CLOSE", modalId: id, canceled });
    },
    [stateRef, dispatch]
  );
  useModalsEvents({
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: ({ modal, ...payload }) => openContextModal2(modal, payload),
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAllModals: closeAll
  });
  const ctx = {
    modals: state.modals,
    openModal: openModal2,
    openConfirmModal: openConfirmModal2,
    openContextModal: openContextModal2,
    closeModal: closeModal2,
    closeContextModal: closeModal2,
    closeAll
  };
  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal == null ? void 0 : currentModal.type) {
      case "context": {
        const { innerProps, ...rest } = currentModal.props;
        const ContextModal = modals2[currentModal.ctx];
        return {
          modalProps: rest,
          content: (0, import_jsx_runtime2.jsx)(ContextModal, { innerProps, context: ctx, id: currentModal.id })
        };
      }
      case "confirm": {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } = separateConfirmModalProps(currentModal.props);
        return {
          modalProps: separatedModalProps,
          content: (0, import_jsx_runtime2.jsx)(
            ConfirmModal,
            {
              ...separatedConfirmProps,
              id: currentModal.id,
              labels: currentModal.props.labels || labels
            }
          )
        };
      }
      case "content": {
        const { children: currentModalChildren, ...rest } = currentModal.props;
        return {
          modalProps: rest,
          content: (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: currentModalChildren })
        };
      }
      default: {
        return {
          modalProps: {},
          content: null
        };
      }
    }
  };
  const { modalProps: currentModalProps, content } = getCurrentModal();
  return (0, import_jsx_runtime2.jsxs)(ModalsContext.Provider, { value: ctx, children: [
    (0, import_jsx_runtime2.jsx)(
      Modal,
      {
        zIndex: getDefaultZIndex("modal") + 1,
        ...modalProps,
        ...currentModalProps,
        opened: state.modals.length > 0,
        onClose: () => {
          var _a;
          return closeModal2((_a = state.current) == null ? void 0 : _a.id);
        },
        children: content
      }
    ),
    children
  ] });
}
export {
  ModalsProvider,
  closeAllModals,
  closeModal,
  modals,
  openConfirmModal,
  openContextModal,
  openModal,
  useModals
};
//# sourceMappingURL=@mantine_modals.js.map