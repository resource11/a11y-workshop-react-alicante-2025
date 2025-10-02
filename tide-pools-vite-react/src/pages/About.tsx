import { useDocumentTitle } from '../hooks/useDocumentTitle';
export default function About(){
  useDocumentTitle('Tide Pools · About');
  return (
    <section>
      <h1 tabIndex={-1}>About This Workshop</h1>
      <p>Practical accessibility in React using the Sand Dollar approach.</p>
    </section>
  );
}
