const Card = (data) => {
    return(
        <div className='bg-white cursor-pointer w-56 h-68'> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 rounded-sm bg-neutral-100 text-black text-xs '>{data.data.category}</span>
                    <img  className='w-full h-full object-cover rounded-lg ' src={data.data.image} alt={data.data.description}/>
                    <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-400 w-6 h-6 rounded-full m-2">
                        +
                    </div>
            </figure>
            <p className='flex justify-between'> 
                <span className='text-sm font-light'>{data.data.title}</span>
                <span  className='text-sm font-bold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card