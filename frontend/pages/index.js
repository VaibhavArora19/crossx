import Header from '@/components/Homepage/Header';
import About from '@/components/Homepage/About';
import Banner from '@/components/Homepage/Banner';
import Footer from '@/components/Homepage/Footer';

export default function Home() {
  return (
    <section className='bg-black'>
      <Header />
      <About />
      <Banner />
      <Footer />
    </section>
  );
}
