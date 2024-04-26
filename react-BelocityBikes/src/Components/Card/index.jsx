const Card = () => {
    return(
        <div className='bg-white cursor-pointer w-56 h-68'> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 rounded-sm bg-neutral-100 text-black text-xs '>MTB</span>
                    <img  className='w-full h-full object-cover rounded-lg ' src="https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_400%2Cq_80%2Cw_600/pnft7kcgiy2qirrrkcb9/MY22Fathom291_ColorAAmberGlow.jpg" alt='Fathon'/>
                    <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-400 w-6 h-6 rounded-full m-2">
                        +
                    </div>
            </figure>
            <p className='flex justify-between'> 
                <span className='text-sm font-light'>Fathon 29 1</span>
                <span  className='text-sm font-bold'>$35,900 </span>
            </p>
        </div>
    )
}

export default Card