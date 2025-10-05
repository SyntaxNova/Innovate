import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { innovationFields } from '../data/fields';

/**
 * Field Selection Page Component
 * Shows subcategories for a selected field and allows navigation to idea submission
 */
function FieldSelection() {
  const { fieldId } = useParams();
  const navigate = useNavigate();
  const field = innovationFields[fieldId];

  // If field not found, redirect to home
  if (!field) {
    navigate('/');
    return null;
  }

  const handleSubcategoryClick = (subcategoryId) => {
    navigate(`/submit/${fieldId}/${subcategoryId}`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{field.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {field.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {field.description}
          </p>
          <Link to="/">
            <Button variant="secondary">
              ← Back to Fields
            </Button>
          </Link>
        </div>

        {/* Subcategories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Choose a Subcategory
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Select the specific area within {field.name.toLowerCase()} that best matches your innovative idea.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {field.subcategories.map((subcategory, index) => (
              <Card 
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory.id)}
                className="cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {subcategory.name}
                  </h3>
                  <div className="text-blue-600 font-medium">
                    Submit Idea →
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Field Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            About {field.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">What We're Looking For</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Innovative solutions to existing problems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Scalable and sustainable approaches
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Community-focused implementations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Technology-driven solutions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Submission Guidelines</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Clear problem statement
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Detailed approach and methodology
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Expected outcomes and impact
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Implementation timeline
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {field.subcategories.length}
            </div>
            <div className="text-gray-600">Subcategories</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              50+
            </div>
            <div className="text-gray-600">Ideas Submitted</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              15
            </div>
            <div className="text-gray-600">Implemented</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FieldSelection;
