import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const API_KEY = 'XBPIRKUMPUNMBAYGSALPSBZAVY';

const fetchCourses = async (searchTerm) => {
  const response = await fetch(
    `https://api.golfcourseapi.com/courses?search=${encodeURIComponent(searchTerm)}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }

  return response.json();
};

const SearchCourses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, isLoading, error } = useQuery({
      queryKey: ['courses', searchTerm],
      queryFn: () => fetchCourses(searchTerm),
      enabled: !!searchTerm,
    });
  
    return (
      <div className="search-container">
        <h2>Search Golf Courses</h2>
        <input
          type="text"
          placeholder="Enter course name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {isLoading && <p>Loading courses...</p>}
        {error && <p>Error: {error.message}</p>}
  
        <ul className="course-list">
          {data?.courses?.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong> — {course.city}, {course.state}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default SearchCourses;
