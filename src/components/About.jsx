const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">About</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Sapoetronic.com, where innovation meets creativity. We are dedicated to delivering 
              exceptional solutions that blend cutting-edge technology with thoughtful design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experts combines years of experience with a passion for excellence, ensuring 
              that every project we undertake exceeds expectations.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sapoetronic, we believe in creating meaningful connections through our work, fostering 
              relationships built on trust, quality, and innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking for design, photography, or video production services, we're here 
              to bring your vision to life with professionalism and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
