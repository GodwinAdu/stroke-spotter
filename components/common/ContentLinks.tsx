import Link from "next/link";


const ContentLinks = () => {
    return (
        <section className="py-12 px-4 bg-gradient-to-r from-primary/90 to-indigo/90">
            <div className="w-[100%] md:max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Explore Our Content
                </h2>
                <p className="mt-4 text-xl text-white opacity-80">
                    Dive deep into our resources and stay updated.
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Link href="/blogs" className="px-8 py-3 rounded-xl font-medium bg-white hover:bg-indigo/50 hover:text-white text-blue-500 hover:bg-gray-100 transition duration-300">
                        Blog
                    </Link>
                    <Link href="/webinars" className="px-8 py-3 rounded-xl font-medium bg-white hover:bg-indigo/50 hover:text-white  text-blue-500 hover:bg-gray-100 transition duration-300">
                        Webinars
                    </Link>
                    <Link href="/news" className="px-8 py-3 rounded-xl font-medium bg-white hover:bg-indigo/50 hover:text-white  text-blue-500 hover:bg-gray-100 transition duration-300">
                        News
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ContentLinks;
