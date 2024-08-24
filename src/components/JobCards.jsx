// JobCards component

import PropTypes from "prop-types";

function JobCards({ jobs }) {
  return (
    <div className="bg-gray-300 w-full flex flex-col">
      <div className="flex w-full h-14 items-center mt-4">
        <p className="bg-orange-300 text-black font-semibold ml-20 border-2 p-3 rounded-full">
          Total: <span className="text-green-600 underline">{jobs.length}</span>{" "}
          job(s) available for you.
        </p>
      </div>
      <div className="w-full flex flex-rol flex-wrap justify-center gap-5 py-8">
        {/* Job's card container */}
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white group hover:bg-purple-400 hover:border-purple-400 flex flex-row justify-center items-center border-2 shadow-xl w-auto h-auto px-2 py-2 rounded-xl gap-4"
            >
              <div className="flex justify-center items-center">
                <img
                  src={job.img}
                  alt={job.companyName}
                  className="w-[150px] h-[120px] object-cover rounded-lg mb-4 hover:cursor-default"
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl text-black font-bold mb-2 group-hover:text-white">
                    {job.jobTitle}
                  </h2>
                  <p className="text-gray-900 mb-2 group-hover:text-white">
                    Company: {job.companyName}
                  </p>
                  <p className="text-gray-600 group-hover:text-white mb-2">
                    Category: {job.category}
                  </p>
                  <p className="text-gray-600 group-hover:text-white mb-2">
                    Type: {job.type}
                  </p>
                  <p className="text-green-500 group-hover:text-white font-semibold">
                    {job.salary}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex flex-row justify-center items-center space-x-1 border-2 border-blue-400 rounded-full px-6 py-2 hover:cursor-pointer">
                    <img
                      src="https://img.icons8.com/?size=100&id=1304&format=png&color=000000"
                      alt="Target"
                      className="w-3 h-3"
                    />
                    <a className="group-hover:text-white">FOLLOW</a>
                  </div>
                  <a className="border-2 border-pink-400 rounded-full px-6 py-2 hover:cursor-pointer hover:bg-pink-400 group-hover:text-white hover:font-semibold">
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
}

JobCards.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      jobTitle: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default JobCards;

