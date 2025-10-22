import { Alert, Button } from "@mui/material";
import { useCallback } from "react";

export default function Error({ status }) {

  const reloadHandle = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="fixed bottom-3 right-3">
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={reloadHandle}>
            <span className="font-bold underline">Reload</span>
          </Button>
        }
      >
        An unexpected error has occurred.
      </Alert>
    </div>
  );
}
