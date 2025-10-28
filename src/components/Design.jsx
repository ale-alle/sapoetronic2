const Design = () => {
  return (
    <section id="design" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">Design</h2>
        <div className="space-y-8">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Our design philosophy centers on creating visually stunning and functionally exceptional 
            experiences that resonate with your audience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Brand Identity', 'Web Design', 'UI/UX Design', 'Graphic Design'].map((item, index) => (
              <div key={index} className="bg-light-green rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-dark-green/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-green text-center">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
