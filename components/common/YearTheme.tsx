
   
   interface Props{
    year: string;
    theme:string;
   }

const YearTheme = ({ year, theme }:Props) => {
    return (
        <section className="py-12 px-4 bg-gray-100 border-t border-b border-gray-200">
            <div className="w-[95%] md:max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white text-indigo/50 sm:text-4xl">
                    Theme of the Year
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Celebrating the spirit of {year}
                </p>
                
                <div className="mt-6 flex justify-center w-full">
                    <div className="w-[95%] md:max-w-lg py-5 px-5 bg-white rounded-xl shadow-lg flex items-center ">
                       
                        <div >
                            {/* <div className="text-2xl font-medium text-black">Year: {year}</div> */}
                            <p className="text-gray-600 dark:text-black font-semibold">{theme}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YearTheme;
