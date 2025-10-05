/**
 * Reusable Card Component
 * Provides consistent card styling with hover effects
 */
function Card({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'medium',
  onClick 
}) {
  // Base card classes
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100';
  
  // Padding variants
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  // Hover effects
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${paddings[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
