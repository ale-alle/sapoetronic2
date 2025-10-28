const Photos = () => {
  return (
    <section id="photos" className="py-16 px-4 sm:px-6 lg:px-8 bg-light-green">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">Photos</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Capturing moments that matter with professional photography services tailored to your needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
              <div className="aspect-video bg-gradient-to-br from-dark-green to-dark-green/60 flex items-center justify-center">
                <svg className="w-16 h-16 text-light-green opacity-50 group-hover:opacity-75 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-dark-green">Photo Gallery {item}</h3>
                <p className="text-gray-600 text-sm mt-1">Professional photography showcase</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
