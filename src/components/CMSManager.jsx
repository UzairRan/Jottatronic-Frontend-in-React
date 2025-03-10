// src/components/CMSManager.jsx
import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Change './firebase' to '../firebase' 

const docRef = doc(db, 'legal', 'docs');

export default function CMSManager() {
  const [content, setContent] = useState({
    privacyPolicy: '',
    termsOfUse: ''
  });

  const loadContent = async () => {
    try {
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setContent(snapshot.data());
      }
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  const saveContent = async () => {
    try {
      await updateDoc(docRef, content);
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div className="cms-editor">
      <h3>Privacy Policy</h3>
      <textarea
        value={content.privacyPolicy}
        onChange={(e) => setContent({...content, privacyPolicy: e.target.value})}
        rows={15}
      />
      
      <h3>Terms of Use</h3>
      <textarea
        value={content.termsOfUse}
        onChange={(e) => setContent({...content, termsOfUse: e.target.value})}
        rows={15}
      />
      
      <button 
        onClick={saveContent}
        className="save-button"
      >
        Save Changes
      </button>
    </div>
  );
}  