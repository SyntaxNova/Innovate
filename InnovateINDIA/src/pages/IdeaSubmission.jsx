import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { innovationFields } from '../data/fields';

/**
 * Idea Submission Page Component
 * Form for submitting innovative ideas with predefined sections
 */
function IdeaSubmission() {
  const { fieldId, subcategory } = useParams();
  const navigate = useNavigate();
  const field = innovationFields[fieldId];
  
  // Find the selected subcategory
  const selectedSubcategory = field?.subcategories.find(sub => sub.id === subcategory);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    problemStatement: '',
    intuition: '',
    approach: '',
    solution: '',
    expectedOutcome: '',
    timeline: '',
    resources: '',
    contactEmail: ''
  });

  const [imageFile, setImageFile] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.problemStatement || !formData.solution) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate form submission
    alert('Thank you for submitting your innovative idea! We will review it and get back to you soon.');
    
    // Reset form
    setFormData({
      title: '',
      problemStatement: '',
      intuition: '',
      approach: '',
      solution: '',
      expectedOutcome: '',
      timeline: '',
      resources: '',
      contactEmail: ''
    });
    setImageFile(null);
    
    // Navigate to community feed
    navigate('/community');
  };

  // If field or subcategory not found, redirect to home
  if (!field || !selectedSubcategory) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">{field.icon}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Submit Your Innovation Idea
          </h1>
          <p className="text-lg text-gray-600">
            <span className="font-medium">{field.name}</span> → <span className="font-medium">{selectedSubcategory.name}</span>
          </p>
          <Link to={`/fields/${fieldId}`}>
            <Button variant="secondary" className="mt-4">
              ← Back to {field.name}
            </Button>
          </Link>
        </div>

        {/* Submission Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                Basic Information
              </h2>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter a compelling title for your innovation idea"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                1. Problem Statement *
              </h2>
              <p className="text-gray-600">
                Clearly describe the problem or challenge you want to address. What specific issue are you trying to solve?
              </p>
              <textarea
                id="problemStatement"
                name="problemStatement"
                value={formData.problemStatement}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the problem in detail..."
                required
              />
            </div>

            {/* Intuition / Inspiration */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                2. Intuition / Inspiration
              </h2>
              <p className="text-gray-600">
                What inspired this idea? What observations or experiences led you to this solution?
              </p>
              <textarea
                id="intuition"
                name="intuition"
                value={formData.intuition}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Share your inspiration and the thought process behind this idea..."
              />
            </div>

            {/* Approach / Method */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                3. Approach / Method *
              </h2>
              <p className="text-gray-600">
                How do you plan to solve this problem? What methodology or approach will you use?
              </p>
              <textarea
                id="approach"
                name="approach"
                value={formData.approach}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your approach and methodology..."
                required
              />
            </div>

            {/* Solution / Outcome */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                4. Solution / Outcome *
              </h2>
              <p className="text-gray-600">
                What is your proposed solution? What outcomes do you expect to achieve?
              </p>
              <textarea
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your solution and expected outcomes..."
                required
              />
            </div>

            {/* Additional Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                Additional Details
              </h2>
              
              <div>
                <label htmlFor="expectedOutcome" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Impact
                </label>
                <textarea
                  id="expectedOutcome"
                  name="expectedOutcome"
                  value={formData.expectedOutcome}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What impact do you expect this solution to have?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 6 months, 1 year"
                  />
                </div>

                <div>
                  <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-2">
                    Required Resources
                  </label>
                  <input
                    type="text"
                    id="resources"
                    name="resources"
                    value={formData.resources}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., funding, team, technology"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                Visual Materials (Optional)
              </h2>
              <p className="text-gray-600">
                Upload any diagrams, mockups, or visual materials that help explain your idea.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <label htmlFor="image" className="cursor-pointer">
                  <div className="text-gray-400 mb-2">
                    <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-blue-600 hover:text-blue-500">
                    {imageFile ? imageFile.name : 'Click to upload image'}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button type="submit" size="large" className="px-12">
                Submit Innovation Idea
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default IdeaSubmission;
