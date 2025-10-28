const Video = () => {
  return (
    <section id="video" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">Video</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Check out Sapoetronic's latest video to see it in action!
        </p>
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-light-green rounded-lg p-8 shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PfQ6oQsELKU"
                title="Sapoetronic - YouTube video"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
