const Video = () => {
  return (
    <section id="video" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">Video</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Bringing your stories to life through professional video production and editing services.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light-green rounded-lg p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-dark-green to-dark-green/60 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-24 h-24 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-dark-green mb-2">Corporate Videos</h3>
            <p className="text-gray-600">
              Professional corporate video production to showcase your business, products, and services 
              with cinematic quality.
            </p>
          </div>
          <div className="bg-light-green rounded-lg p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-dark-green to-dark-green/60 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-24 h-24 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-dark-green mb-2">Creative Content</h3>
            <p className="text-gray-600">
              Engaging creative content for social media, marketing campaigns, and promotional materials 
              that capture attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
