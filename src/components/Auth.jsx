// src/components/Auth.jsx
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase'; // Add missing import

export default function AuthButtons() {
    const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error('Google login failed:', error);
      }
    };
  return (
    <div className="auth-buttons">
      <button className="auth-btn google-btn" onClick={handleGoogleLogin}>
  Login with Google
</button>
    </div>
  );
}  