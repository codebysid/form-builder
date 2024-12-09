import { signIn } from "../utils/auth";
import Icons from "./Icons";
import Button from "./ui/Button";

const Signin = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button
        type="submit"
        variant="outline"
        icon={<Icons name="githubIcon" />}
      >
        Continue with Github
      </Button>
    </form>
  );
};

export default Signin;
