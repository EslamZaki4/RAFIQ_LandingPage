
function Counter() {
  return (
    <>
    <div className="bg-[#F5FAFF]">
    
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8   mx-auto justify-items-center">
            {[
              {  end: 16, label: 'Reviews' },
              {  end: 60, label: 'Download' },
              {  end: 50, label: 'Users' },
            
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-[#3774AA]  items-center lg:py-28 py-[10px]"
              >
               
                <div  className="text-[#3774AA] text-lg md:text-3xl font-bold " >
                {item.end}K +
                  </div>
                <p className=" text-[10px] md:text-[26px] mt-1 font-semibold text-[#3774AA]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Counter
