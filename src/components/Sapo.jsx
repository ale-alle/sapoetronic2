const Sapo = () => {
  return (
    <section id="sapo" className="py-16 px-4 sm:px-6 lg:px-8 bg-light-green">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">Sapo</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">Quality</h3>
              <p className="text-gray-600">
                We prioritize excellence in every aspect of our work, ensuring the highest standards 
                of quality and professionalism.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">Speed</h3>
              <p className="text-gray-600">
                Fast turnaround times without compromising on quality. We understand the importance 
                of meeting deadlines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">Innovation</h3>
              <p className="text-gray-600">
                Staying ahead of the curve with the latest technologies and creative approaches to 
                deliver unique solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sapo;
