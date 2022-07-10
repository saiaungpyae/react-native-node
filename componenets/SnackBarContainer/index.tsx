import { Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { TypedReducer } from "../../store";
import { setSnackBarState } from "../../store/snackbar";

export default function SnackbarContainer() {
  const dispatch = useDispatch();
  const { snackbar } = useSelector((state: TypedReducer) => state.snackbar);

  return (
    <Snackbar
      visible={snackbar.open}
      duration={3000}
      onDismiss={() => setSnackBarState({ open: false })(dispatch)}
      wrapperStyle={{ top: 0, zIndex: 1, maxWidth: "400px" }}
      action={{
        label: "Close",
        onPress: () => {
          setSnackBarState({ open: false })(dispatch);
        },
      }}
    >
      {snackbar.message}
    </Snackbar>
  );
}
