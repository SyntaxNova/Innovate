import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { mockIdeas } from '../data/fields';

/**
 * Community Feed Page Component
 * Displays all submitted ideas with filtering and search functionality
 */
function CommunityFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Get unique fields for filter
  const fields = ['all', ...new Set(mockIdeas.map(idea => idea.field))];

  // Filter and sort ideas
  const filteredIdeas = mockIdeas
    .filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          idea.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesField = selectedField === 'all' || idea.field === selectedField;
      return matchesSearch && matchesField;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'upvotes':
          return b.upvotes - a.upvotes;
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Implemented':
        return 'bg-green-100 text-green-800';
      case 'Under Development':
        return 'bg-blue-100 text-blue-800';
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Innovation Feed
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore innovative ideas shared by our community members. Get inspired, provide feedback, 
            and connect with fellow innovators.
          </p>
          <Link to="/">
            <Button variant="secondary" className="mt-4">
              ← Back to Home
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Ideas
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by title or problem..."
              />
            </div>

            {/* Field Filter */}
            <div>
              <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Field
              </label>
              <select
                id="field"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {fields.map(field => (
                  <option key={field} value={field}>
                    {field === 'all' ? 'All Fields' : field}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Latest First</option>
                <option value="upvotes">Most Popular</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {mockIdeas.length}
            </div>
            <div className="text-gray-600">Total Ideas</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {mockIdeas.filter(idea => idea.status === 'Implemented').length}
            </div>
            <div className="text-gray-600">Implemented</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {mockIdeas.filter(idea => idea.status === 'Under Development').length}
            </div>
            <div className="text-gray-600">In Development</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {fields.length - 1}
            </div>
            <div className="text-gray-600">Fields Covered</div>
          </Card>
        </div>

        {/* Ideas Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Innovation Ideas ({filteredIdeas.length})
          </h2>
          
          {filteredIdeas.length === 0 ? (
            <Card className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No ideas found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredIdeas.map((idea) => (
                <Card key={idea.id} className="h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {idea.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-500">{idea.field}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{idea.subcategory}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(idea.status)}`}>
                      {idea.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Problem Statement</h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {idea.problemStatement}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Approach</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {idea.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {idea.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {idea.author}</span>
                      <span>•</span>
                      <span>{new Date(idea.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{idea.upvotes}</span>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Have an Innovative Idea?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and share your innovative solutions to help build a better India.
            </p>
            <Link to="/">
              <Button size="large">
                Submit Your Idea
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CommunityFeed;
