import { useDocumentTitle } from '../hooks/useDocumentTitle';
export default function Explore(){
  useDocumentTitle('Tide Pools · Explore');
  return (
    <section>
      <h1 tabIndex={-1}>Explore Components</h1>
      <p>In the workshop, we’ll add Tabs, Accordion, Dialog, and Toasts here.</p>
    </section>
  );
}
