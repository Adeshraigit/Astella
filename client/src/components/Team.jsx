export const Team = () => {
  const team = [
      {
          name: "Adesh Rai",
          title: "Team Leader",
          linkedin: "https://www.linkedin.com/in/adeshrai/"
      },
      {
          name: "Karim Shaikh",
          title: "Team Member",
          linkedin: "https://www.linkedin.com/in/karim-shaikh/"
      },
      {
          name: "Yuvraj Singh",
          title: "Team Member",
          linkedin: "https://www.linkedin.com/in/yuvraj-singh/"
      },
      {
          name: "Rudra Salokhe",
          title: "Team Member",
          linkedin: "https://www.linkedin.com/in/rudra-salokhe/"
      },
  ];

  return (
      <section id="team" className="py-14 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
              <div className="max-w-xl mx-auto">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                      Meet Our Team
                  </h3>
                  <p className="text-gray-600 mt-3">
                      Get to know the creative minds driving our success.
                  </p>
              </div>
              <div className="mt-12">
                  <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                      {team.map((item, idx) => (
                          <li key={idx} className="flex flex-col items-center">
                              <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full shadow-md">
                                  <span className="text-xl font-semibold text-gray-700">{item.name[0]}</span>
                              </div>
                              <div className="mt-4 text-center">
                                  <h4 className="text-gray-700 font-semibold text-lg">
                                      {item.name}
                                  </h4>
                                  <p className="text-indigo-600">{item.title}</p>
                                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                      <button className="mt-2 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                                          LinkedIn
                                      </button>
                                  </a>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>
  );
};
