import Wrapper from "../hoc/Wrapper";

import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Welcome to the All-In-One Template!
      <Button color="secondary" variant="contained">
        Works
      </Button>
    </div>
  );
}

export default Wrapper(Home);
