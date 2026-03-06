
const CTA = () => {
  return (
    <div className="py-36 relative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold">
          Ready to Build Something Exceptional?
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Let’s create a high-performance website that grows your business.
        </p>

        <button className="mt-10 px-12 py-5 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
          Get Free Consultation
        </button>
      </div>
    </div>
  );
};

export default CTA;
