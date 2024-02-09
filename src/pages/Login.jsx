import LoginHeader from "./forms/LoginHeader";
import LoginForm from "../components/forms/LoginForm";

export default function Login () {
    return (
        <>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <LoginHeader
                        heading="Login to your account"
                        paragraph="Don't have an account yet? "
                        linkName="Signup"
                        linkUrl="/register" 
                    />

                    <LoginForm />
                </div>
            </div>
        </>
    );
}