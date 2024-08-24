// JobLists Page

import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCards from "../components/JobCards";
import Footer from "../components/Footer";
import DropdownFilter from "../components/DropdownFilter";
import jobListings from "../data";

function JobLists() {
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  const categories = [...new Set(jobListings.map((job) => job.category))];
  const types = [...new Set(jobListings.map((job) => job.type))];

  const handleFilter = (category, type) => {
    let newFilteredJobs = jobListings;
    if (category) {
      newFilteredJobs = newFilteredJobs.filter(
        (job) => job.category === category,
      );
    }
    if (type) {
      newFilteredJobs = newFilteredJobs.filter((job) => job.type === type);
    }
    setFilteredJobs(newFilteredJobs);
  };

  const handleReset = () => {
    setFilteredJobs(jobListings);
  };

  return (
    <div>
      <Navbar />
      <DropdownFilter
        categories={categories}
        types={types}
        onFilter={handleFilter}
        onReset={handleReset}
      />
      <JobCards jobs={filteredJobs} />
      <Footer />
    </div>
  );
}

export default JobLists;

