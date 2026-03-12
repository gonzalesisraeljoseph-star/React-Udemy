import './App.css'
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

function App() {


  return (
    <>
    <Hero />
    <Header />
     <h1 className='text-sky-600 dark:text-sky-400 border-4 p-4 rounded-xl'>I try to replicate and learn my online course</h1>
     <div className='flex gap-4'>
        <Card title="Buy Python Course" buttonText="Join Now" imageurl="https://whszephyr.com/wp-content/uploads/2021/03/Capture7836548-e1614624406630.png"/>
        <Card title="Buy Nodejs Course" buttonText='Click Now' imageurl="https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg"/>
        <Card title='Buy React Course' buttonText='Buy Now' imageurl='https://cdn.wallpapersafari.com/12/47/WmwZt0.jpg'/>
     </div>
    </>
  );
}

export default App