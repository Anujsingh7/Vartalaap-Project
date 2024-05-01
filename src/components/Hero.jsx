

const Hero = () => {
    return (
        <section className="hero bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("https://uniformapp.in/blog/wp-content/uploads/2020/04/Harcourt-Butler-Technical-UniversityHBTU_-A-Complete-Guide-1.png")', height: '600px' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-10">
                <h1 className="text-5xl font-extrabold text-orange-300 mb-4 leading-tight">Connect with HBTU Vartalaap</h1>
                <p className="text-lg text-gray-300 mb-8">Bringing HBTU students together through advanced interaction</p>
            </div>
            <marquee className="overflow-hidden bg-green-600 py-3 relative whitespace-no-wrap">
                <div className="marquee-content inline-block animate-marquee">
                    <span>Welcome to Vartalaap, an advanced platform for students' interaction. The platform is full of information. If you want to know about subcouncils, notes, or want to post your queries over our discussion forum,</span>
                </div>
            </marquee>
        </section>
    );
};

export default Hero;
