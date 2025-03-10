// src/pages/LegalPage.jsx
export default function LegalPage({ type }) {
    const [content, setContent] = useState('');
  
    useEffect(() => {
      fetch(`/${type}.md`)
        .then(res => res.text())
        .then(text => setContent(text));
    }, [type]);
  
    return (
      <div className="legal-page">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  } 