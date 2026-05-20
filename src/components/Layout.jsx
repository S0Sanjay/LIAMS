import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PageTransition from './motion/PageTransition';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="layout__main">
        <PageTransition />
      </main>
      <Footer />
    </div>
  );
}
