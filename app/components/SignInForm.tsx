import * as React from "react";
import { SignInFormProps } from "../types";

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await onSubmit(email, password);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      {/* ... existing form elements ... */}
      
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      
      <button 
        type="submit" 
        disabled={isLoading}
        className="..."
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};