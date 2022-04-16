import LoginBasePage from "../src/components/LoginBasePage";
import LoginForm from "../src/components/LoginForm";
import SignupForm from "../src/components/SignupForm";

function SignUp() {
  return (
    <LoginBasePage>
      <SignupForm />
    </LoginBasePage>
  );
}

export default SignUp;
