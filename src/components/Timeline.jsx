const Timeline = () => {
  return (
    <main className="relative flex flex-col gap-7 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl text-[#c1c2c5] font-bold ">
        Timeline
      </h1>
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center divide-y divide-slate-200 ">
          <div className="w-full mx-auto">
            <div className="">
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-[#6741D9] before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    Present
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Continued Learning
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    Continuing to explore Java, JavaScript, Python and PHP to
                    enhance programming skills further.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-[#6741D9] before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    2022 - 2025
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Advancing into B.Tech
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    Enrolled in a B.Tech program in Computer Science and
                    Engineering to delve deeper into the field.
                  </li>
                  <li>
                    Expanded knowledge in programming languages with a focus on
                    Java, Python and advanced JavaScript concepts.
                  </li>
                  <li>
                    Explored JavaScript libraries and frameworks like React.js,
                    Next.js, Node.js, and databases such as MongoDB.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-[#6741D9] before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    2019 - 2022
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Pioneering Diploma Studies
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    Enrolled in a Diploma program in Computer Science and
                    Engineering.
                  </li>
                  <li>
                    Acquired foundational knowledge in Computer Science and
                    Information Technology.
                  </li>
                  <li>
                    Learned various web development technologies such as HTML,
                    CSS, JavaScript, Bootstrap, PHP, MySQL, Python, and jQuery,
                    along with tools like Git and GitHub.
                  </li>
                  <li>
                    Developed projects including a college landing page, a
                    Virtual Assistant, and a major EdTech project.
                  </li>
                  <li>
                    Collaborated on projects with friends and explored
                    freelancing opportunities, eventually creating a blog.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-slate-600 before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    Sep-2018
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Introduction to Web Development
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    {" "}
                    Began the journey with HTML, CSS, and JavaScript, initially
                    struggling to comprehend JavaScript's intricacies.{" "}
                  </li>
                  <li>
                    Developed a school project that received appreciation from
                    teachers.
                  </li>
                  <li>
                    {" "}
                    Assisted two junior friends by creating small projects
                    involving HTML, CSS, and basic JavaScript.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-slate-600 before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    Aug-2017
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Embarking on the Programming Journey
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    Started exploring Batch Script and VbScript out of
                    curiosity.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 pb-7 sm:pl-32 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-1 before:bg-[#6741D9] before:px-px  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#6741D9]  after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-5 sm:top-1 inline-flex items-center justify-center text-xs uppercase h-6 mb-1 sm:mb-0 text-[#c1c2c5] ">
                    Feb-2003
                  </time>
                  <div className="text-lg font-semibold text-[#c1c2c5]">
                    Born in 2003
                  </div>
                </div>
                <ul className="text-[#b4b5b6] text-sm leading-6 ul_timeline">
                  <li>
                    Born in the village of Basti, located in the state of Uttar
                    Pradesh, India.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
