import SignupHeader from "./forms/SignupHeader";
import SignupForm from "../components/forms/SignupForm";

export default function Register () {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <SignupHeader
                    heading="Signup to create an account"
                    paragraph="Already have an account? "
                    linkName="Login"
                    linkUrl="/login" 
                />
                <SignupForm />
            </div>
        </div>
    );
}