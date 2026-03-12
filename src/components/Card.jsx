import Button from "./Button";
function Card({title ="Default", imageurl}){
    return (
        <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition shadow'>
        <img className='w-full h-50 object-cover' src={imageurl} alt="sample image" />
        <div className='p-4'>
          <h2 className='text-gray-800'>{title}</h2>
          <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto rem, voluptatum molestias necessitatibus aut.</p>
          <Button />
        </div>
      </div>
    );
}
export default Card