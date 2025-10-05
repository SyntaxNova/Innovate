import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { innovationFields } from '../data/fields';

/**
 * Home Page Component
 * Landing page with introduction and field selection
 */
function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovate<span className="text-yellow-300">INDIA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Empowering communities to share innovative ideas and drive positive change across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="large" 
                variant="secondary"
                onClick={() => document.getElementById('fields-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Fields
              </Button>
              <Link to="/community">
                <Button size="large" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About InnovateINDIA
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              InnovateINDIA is a community-driven platform that brings together innovators, entrepreneurs, 
              and problem-solvers from across India. Our mission is to foster innovation by providing a 
              space where anyone can share their ideas, collaborate with like-minded individuals, and 
              contribute to India's growth story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Share Ideas</h3>
              <p className="text-gray-600">
                Submit your innovative ideas across various fields and get feedback from the community.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
              <p className="text-gray-600">
                Connect with other innovators, find collaborators, and build meaningful partnerships.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovate</h3>
              <p className="text-gray-600">
                Turn your ideas into reality with the support of our vibrant innovation community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fields Selection Section */}
      <section id="fields-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Innovation Field
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select a field that matches your area of interest or expertise. Each field contains 
              specific subcategories to help organize and categorize your innovative ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(innovationFields).map((field) => (
              <Link key={field.id} to={`/fields/${field.id}`}>
                <Card className="h-full">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{field.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {field.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {field.description}
                    </p>
                    <div className="text-blue-600 font-medium">
                      {field.subcategories.length} subcategories →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Share Your Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of innovators who are already making a difference across India.
          </p>
          <Button 
            size="large" 
            variant="secondary"
            onClick={() => document.getElementById('fields-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
