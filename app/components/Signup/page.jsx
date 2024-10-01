import AnimatedIllustration from "./AnimatedIllustration";
import SignUpForm from "./SignUpForm";


export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Animated Illustration */}
          <div className="hidden md:block">
            <AnimatedIllustration />
          </div>
          {/* Right: Sign-up Form */}
          <div className="flex justify-center items-center">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
