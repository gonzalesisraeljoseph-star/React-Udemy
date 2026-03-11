import './App.css'

function App() {


  return (
    <>
     <h1 className='text-sky-600 dark:text-sky-400 border-4 p-4 rounded-xl'>I try to replicate and learn my online course</h1>
     <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition shadow'>
      <img className='w-full h-50 object-cover' src="https://whszephyr.com/wp-content/uploads/2021/03/Capture7836548-e1614624406630.png" alt="sample image" />
      <div className='p-4'>
        <h2 className='text-gray-800'>Card Title</h2>
        <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto rem, voluptatum molestias necessitatibus aut.</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>Buy Now</button>
      </div>
     </div>
      <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition shadow'>
      <img className='w-full h-50 object-cover' src="https://whszephyr.com/wp-content/uploads/2021/03/Capture7836548-e1614624406630.png" alt="sample image" />
      <div className='p-4'>
        <h2 className='text-gray-800'>Card Title</h2>
        <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto rem, voluptatum molestias necessitatibus aut.</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>Buy Now</button>
      </div>
     </div>
    </>
  );
}

export default App