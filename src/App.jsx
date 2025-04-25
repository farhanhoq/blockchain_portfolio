import './App.css'

function App() {

  return (
    <>
      <div className="font-sans custom">
          {/* Navbar */}
          <nav className="text-gray-800 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
                F
              </div>
              <span className="ml-2 text-2xl font-semibold">Farhan</span>
            </div>
            <div>
              <ul className="flex items-center space-x-6">
                <li><a href="#home" className="hover:text-purple-600">Home</a></li>
                <li><a href="#about" className="hover:text-purple-600">About</a></li>
                <li><a href="#process" className="hover:text-purple-600">Process</a></li>
                <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
                <li><a href="#services" className="hover:text-purple-600">Services</a></li>
                <li><a href="#contact"><button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Contact</button></a></li>
              </ul>
            </div>
          </nav>

          {/* Banner */}
          <section id="home" className="py-20 flex items-stretch  w-9/10 mx-auto">
            
            <div className="w-3/5 mr-40">
              <h1 className="text-4xl font-bold text-left mt-14">Hello, I'm</h1>
              <h1 className="text-7xl font-bold text-left">Farhan Hoque</h1>
              <p className="mt-4 text-gray-500 text-left">
                I'm a Blockchain Developer based in Chattogram, Bangladesh, focused on building user-centric solutions across smart contracts, NFTs, and Defi platforms.
              </p>
              <button className="flex mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
                Say Hello!
              </button>
              <div className="flex space-x-4 mt-12">
                <div className="bg-purple-100 w-2xl p-4 rounded shadow text-center">
                  <p className="text-lg font-semibold">1Y</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
                <div className="bg-purple-100 w-2xl p-4 rounded shadow text-center"> 
                  <p className="text-lg font-semibold">25+</p>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
                <div className="bg-purple-100 w-2xl p-4 rounded shadow text-center">
                  <p className="text-lg font-semibold">10</p>
                  <p className="text-sm text-gray-500"> Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="w-2/5 flex justify-end">
              <img
                src="../public/assets/My prof pic.png"
                alt="Farhan"
                className="w-full h-auto object-cover"
              />
            </div>
          
          </section>

      {/* Work Process */}
        <section id="process" className="py-16 px-6 bg-gray-200 ">
          <div className="flex md:flex-row gap-20 max-w-6xl h-auto mx-auto">
            {/* Left Side: Heading and Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-800">Work Process</h2>
              <p className="mt-4 text-gray-500">
                I follow a structured process to deliver secure and efficient blockchain solutions, ensuring every step aligns with your project goals.
              </p>
              <p className="mt-2 text-gray-500">
                From research to launch, my approach focuses on transparency, scalability, and innovation in the Web3 space.
              </p>
            </div>

            {/* Right Side: Process Cards */}
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  number: 1,
                  title: 'Research',
                  desc: 'Identify blockchain use cases and project requirements to ensure a solid foundation.',
                  icon: '📋',
                  offset: false
                },
                {
                  number: 2,
                  title: 'Analyze',
                  desc: 'Evaluate smart contract designs and security risks to optimize performance.',
                  icon: '📊',
                  offset: true
                },
                {
                  number: 3,
                  title: 'Design',
                  desc: 'Create secure and scalable architectures for NFTs, DeFi, or other platforms.',
                  icon: '✏️',
                  offset: false
                },
                {
                  number: 4,
                  title: 'Launch',
                  desc: 'Deploy the solution on Ethereum or other blockchains with thorough testing.',
                  icon: '💻',
                  offset: true
                },
              ].map((step) => (
                <div key={step.number} className={`bg-white hover:bg-purple-200 p-6 h-[250px] rounded-lg shadow-md ${step.offset ? 'mt-4' : ''}`}>
                  <div className="w-12 h-12 bg-purple-200 hover:bg-purple-600 text-white flex items-center justify-center rounded mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Projects */}
        <section id="projects" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
            <p className="mt-4 text-gray-500">
              Explore some of my blockchain projects, showcasing innovative solutions for Web3 challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'ChainFund',
                  category: 'Blockchain Project',
                  desc: 'A smart contract crowdfunding platform powered by smart contracts.',
                  img: '../public/assets/projects/3d-rendering-blockchain-technology (1).jpg',
                },
                {
                  title: 'MetaLease',
                  category: 'Blockchain Project',
                  desc: 'Blockchain-based solution for secure digital leasing and asset rentals.',
                  img: '../public/assets/projects/3d-rendering-blockchain-technology.jpg',
                },
                {
                  title: 'BlockCerts',
                  category: 'Blockchain Project',
                  desc: 'Tamper-proof certificate issuance and verification on the blockchain.',
                  img: '../public/assets/projects/5348934.jpg',
                },
                {
                  title: 'DeTrust Vault',
                  category: 'Blockchain Project',
                  desc: 'A non-custodial DeFi wallet with built-in trustless escrow services.',
                  img: '../public/assets/projects/812.jpg',
                },
                {
                  title: 'NFTicket',
                  category: 'Blockchain Project',
                  desc: 'NFT-powered event ticketing system to prevent fraud and scalping.',
                  img: '../public/assets/projects/blockchain-technology-cartoon-illustration.jpg',
                },
                {
                  title: 'DAOgenda',
                  category: 'Blockchain Project',
                  desc: 'A governance platform enabling transparent DAO decision-making and voting.',
                  img: '../public/assets/projects/on_chain.jpg',
                },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-left">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <p className="text-sm text-gray-500 uppercase">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="mt-2 text-gray-500">{project.desc}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-700"
                    >
                      Case Study
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
              More Project
            </button>
          </div>
        </section>

        {/* Do you have project idea */}
        <section className="py-16 px-6 bg-purple-950 text-center text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Do you have Project Idea? <br /> Let’s discuss your project!
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration.
            </p>
            <button className="mt-8 inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
              Let’s work Together
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* About (What I do) */}
        <section id="services" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-row gap-12">
            {/* Left Side: Heading and Text */}
            <div className="w-1/2 flex flex-col text-left items-start justify-center">
              <h2 className="text-4xl font-bold text-gray-800">What I do?</h2>
              <p className="mt-4 text-gray-500">
                I specialize in building blockchain solutions that empower businesses and users in the Web3 ecosystem.
              </p>
              <p className="mt-2 text-gray-500">
                From smart contracts to decentralized applications, I deliver secure and scalable solutions tailored to your needs.
              </p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
                Say Hello!
              </button>
            </div>

            {/* Right Side: Service Cards */}
            <div className="w-full lg:w-1/2 space-y-6">
              {[
                {
                  title: 'User Experience (UX)',
                  desc: 'I design intuitive and user-friendly experiences for blockchain applications, ensuring seamless interaction with smart contracts and decentralized platforms.',
                },
                {
                  title: 'User Interface (UI)',
                  desc: 'I create visually appealing and responsive interfaces for Web3 applications, focusing on accessibility and user engagement.',
                },
                {
                  title: 'Web Development',
                  desc: 'I develop robust decentralized applications (dApps) using modern web technologies, integrating with blockchain networks like Ethereum.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:border-l-4 hover:border-purple-600"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-gray-500">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Together / Contact */}
        <section id="contact" className=" px-6 relative">
          <div className="w-5/7  mx-auto flex flex-row gap-12 bg-white rounded-2xl p-12 -mb-12">
            {/* Left Side: Contact Info */}
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-gray-800">Let's discuss your Project</h2>
              <p className="mt-4 text-gray-500">
                There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration.
              </p>
              <div className="mt-6 space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded">
                    📍
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-semibold">Address:</p>
                    <p className="text-gray-500">Chattogram, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded">
                    📧
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-semibold">My Email:</p>
                    <p className="text-gray-500">farhanhoq0599@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded">
                    📞
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-semibold">Call Me Now:</p>
                    <p className="text-gray-500">(+880) ****-******</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.14 6.84 9.46.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.1-.65.36-1.1.65-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.25-.46-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.84c.85 0 1.7.12 2.5.34 1.9-1.3 2.75-1.02 2.75-1.02.56 1.38.2 2.41.1 2.66.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.3.68.9.68 1.82v2.7c0 .27.18.58.68.48A10 10 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-1/2">
              <p className="mt-4 text-gray-500">
                There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Budget*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <textarea
                  placeholder="Message*"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="button"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded"
                >
                  Submit
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-6 pt-32 px-6 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto flex flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                F
              </div>
              <span className="text-lg font-semibold">Farhan</span>
            </div>
            <nav className="mt-4 sm:mt-0">
              <ul className="flex flex-wrap justify-center space-x-6">
                <li><a href="#home" className="hover:text-purple-600">Home</a></li>
                <li><a href="#about" className="hover:text-purple-600">About</a></li>
                <li><a href="#services" className="hover:text-purple-600">Services</a></li>
                <li><a href="#process" className="hover:text-purple-600">Process</a></li>
                <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
                <li><a href="#blog" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
              </ul>
            </nav>
            <p className="mt-4 sm:mt-0 text-sm">Copyright © 2025. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
