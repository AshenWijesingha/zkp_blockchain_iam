"use client";

import {
    Code,
    Database,
    ExternalLink,
    Github,
    Key,
    Mail,
    Phone,
    Shield,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Zero Knowledge Proofs",
      description: "Secure authentication without revealing sensitive data.",
      details: "Built with advanced cryptographic protocols",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Blockchain Storage",
      description: "Immutable, secure identity storage using Ethereum.",
      details: "Decentralized and transparent",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Modern API",
      description: "High-performance RESTful API with FastAPI.",
      details: "Async support and automatic documentation",
    },
    {
      icon: <Key className="w-8 h-8 text-blue-500" />,
      title: "Secure Claims",
      description: "Handle identity assertions with confidence.",
      details: "Flexible, extensible architecture",
    },
  ];

  const techSpecs = [
    {
      title: "Zero Knowledge Proof Protocols",
      items: [
        { name: "Sigma Protocols", description: "Interactive ZKP for discrete log relations." },
        { name: "SNARKs", description: "Succinct non-interactive proofs for complex statements." },
        { name: "Bulletproofs", description: "Efficient range proofs without trusted setup." },
      ],
    },
    {
      title: "Blockchain Integration",
      items: [
        { name: "Smart Contracts", description: "ERC-725 identity standard implementation." },
        { name: "Storage", description: "IPFS integration for decentralized data." },
        { name: "Consensus", description: "Proof of Authority for validators." },
      ],
    },
    {
      title: "Security Measures",
      items: [
        { name: "Key Management", description: "HSM integration for secure key storage." },
        { name: "Encryption", description: "Post-quantum encryption schemes." },
        { name: "Access Control", description: "Attribute-based access control (ABAC)." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600"><a href="">ZKP-Blockchain-IAM</a></h1>
          <nav className="flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-500">
              Features
            </a>
            <a href="#technical" className="text-gray-600 hover:text-blue-500">
              Technical Specs
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Secure Identity Verification with Zero Knowledge
          </h2>
          <p className="mt-4 text-gray-600">
            Combining blockchain and cryptography to enable seamless, secure identity management.
          </p>
          <a
            href="#features"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Explore Features
          </a>
        </div>
      </section>

            {/* Animation Section */}
      <section id="animation" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-gray-600">
            Watch the following animation to understand how Zero Knowledge Proofs and Blockchain work together to provide secure identity management.
            </p>
        </div>

        {/* Animated Process Flow */}
        <div className="relative mt-8 mx-auto max-w-4xl px-4">
            <div className="flex justify-between items-center">
            <div className="step step-1">
                <div className="icon bg-blue-500 text-white p-4 rounded-full">
                <span className="text-xl">1</span>
                </div>
                <p className="mt-2 text-gray-600">Enter Credentials</p>
            </div>
            <div className="arrow step-arrow"></div>
            <div className="step step-2">
                <div className="icon bg-green-500 text-white p-4 rounded-full">
                <span className="text-xl">2</span>
                </div>
                <p className="mt-2 text-gray-600">Zero Knowledge Proof</p>
            </div>
            <div className="arrow step-arrow"></div>
            <div className="step step-3">
                <div className="icon bg-yellow-500 text-white p-4 rounded-full">
                <span className="text-xl">3</span>
                </div>
                <p className="mt-2 text-gray-600">Blockchain Verification</p>
            </div>
            <div className="arrow step-arrow"></div>
            <div className="step step-4">
                <div className="icon bg-red-500 text-white p-4 rounded-full">
                <span className="text-xl">4</span>
                </div>
                <p className="mt-2 text-gray-600">API Response</p>
            </div>
            </div>
        </div>

        {/* Add animation styles */}
        <style jsx>{`
            .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            opacity: 0;
            transform: translateY(50px);
            animation: stepAnimation 4s ease-out infinite;
            }
            .step-1 {
            animation-delay: 0s;
            }
            .step-2 {
            animation-delay: 1s;
            }
            .step-3 {
            animation-delay: 2s;
            }
            .step-4 {
            animation-delay: 3s;
            }
            .arrow {
            width: 30px;
            height: 5px;
            background-color: gray;
            margin-top: 20px;
            margin-bottom: 20px;
            transform: rotate(90deg);
            }
            @keyframes stepAnimation {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            50% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
            }
        `}</style>
        </section>

      {/* Description Section */}
      <section id="description" className="py-12 bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Project Overview</h2>
            <p className="mt-4 text-gray-600">
            ZKP-Blockchain-IAM is a cutting-edge identity management system that leverages blockchain and zero-knowledge proofs (ZKPs) to enable secure and private authentication and identity management. This decentralized solution ensures that user information remains private while still providing verifiable proof of identity.
            </p>
            <p className="mt-4 text-gray-600">
            By combining modern cryptographic protocols with blockchain technology, this system provides a robust and scalable solution for secure digital identity management. Here's a breakdown of the project's core features:
            </p>
        </div>

        {/* Features Overview Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Zero Knowledge Proofs</h3>
            <p className="text-gray-600 mt-2">
                Zero-knowledge proofs allow for secure identity verification without revealing any personal information, ensuring user privacy.
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Blockchain Storage</h3>
            <p className="text-gray-600 mt-2">
                Identity data is stored securely on the blockchain, providing transparency and immutability, leveraging Ethereum for decentralized trust.
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Modern API</h3>
            <p className="text-gray-600 mt-2">
                The system is powered by a high-performance RESTful API built with FastAPI, offering async support and automatic documentation.
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Secure Claims</h3>
            <p className="text-gray-600 mt-2">
                The architecture allows for secure handling of identity assertions, enabling flexible and extensible identity verification workflows.
            </p>
            </div>
        </div>
      </section>

      <div id="features"><br></br></div>
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg">
                <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{feature.description}</p>
                <p className="text-xs text-blue-500 text-center mt-1">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="technical"><br></br></div>
      {/* Technical Specs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {techSpecs.map((spec, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <li key={idx}>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mt-4">Contact us for inquiries or demo access.</p>
            <div className="mt-6 flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:inbox.ashen@gmail.com" className="text-gray-600 hover:text-blue-500">
                inbox.ashen@gmail.com
                </a>
            </div>
            <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600">
                    <a
                    href="https://wa.me/94784464128"
                    className="text-gray-600 hover:text-blue-500 flex items-center space-x-1"
                    >+94 78 446 4128</a></span>
            </div>
            <div className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-blue-500" />
                <a
                href="https://github.com/AshenWijesingha/zkp_blockchain_iam.git"
                className="text-gray-600 hover:text-blue-500 flex items-center space-x-1"
                >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
                </a>
            </div>
            </div>
        </div>
      </section> */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mt-4">Contact us for inquiries or demo access.</p>
            
            {/* Flexbox layout for mobile responsiveness */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Mail Section */}
            <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:inbox.ashen@gmail.com" className="text-gray-600 hover:text-blue-500">
                inbox.ashen@gmail.com
                </a>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600">
                <a
                    href="https://wa.me/94784464128"
                    className="text-gray-600 hover:text-blue-500 flex items-center space-x-1"
                >
                    +94 78 446 4128
                </a>
                </span>
            </div>

            {/* GitHub Section */}
            <div className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-blue-500" />
                <a
                href="https://github.com/AshenWijesingha/zkp_blockchain_iam.git"
                className="text-gray-600 hover:text-blue-500 flex items-center space-x-1"
                >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
                </a>
            </div>
            </div>
        </div>
        </section>



      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">© 2024 ZKP-Blockchain-IAM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
