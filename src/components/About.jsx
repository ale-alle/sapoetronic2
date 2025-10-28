const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark-green mb-6 text-center">What is Sapo?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              For centuries, Sapo has been a symbol of skill, luck, and friendly competition across South
              America - a traditional coin-tossing game that brings people together around laughter, challenge, and precision.
             </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rooted in legend and passed down through generations, Sapo captures the spirit of community and play.
            </p>
          </div>
          <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                  Sapoetronic reimagines this timeless game for the modern era - combining classic gameplay with electronic scoring, sleek design, and durable craftsmanship.
              </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether in a bar, a backyard, or a game room, Sapoetronic keeps the tradition alive while adding a high-tech twist that makes every toss more exciting than ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
