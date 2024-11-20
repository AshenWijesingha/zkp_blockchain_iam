# Zero Knowledge Proof Blockchain IAM Service

A secure Identity and Access Management (IAM) service that combines Zero Knowledge Proofs (ZKP) with blockchain technology for enhanced security and privacy.

## Features

- 🔐 Zero Knowledge Proof authentication
- ⛓️ Blockchain-based identity storage
- 🔑 Secure claim management
- 🌐 RESTful API interface
- 📝 Smart contract integration
- 🔄 Real-time identity verification

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Smart Contract Deployment](#smart-contract-deployment)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Python 3.8 or higher
- Node.js 14+ and npm (for smart contract deployment)
- Ethereum node (local or remote)
- Windows, Linux, or macOS

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zkp-blockchain-iam.git
cd zkp-blockchain-iam
```

2. Create and activate virtual environment:

For Windows:
```cmd
python -m venv venv
venv\Scripts\activate.bat
```

For Linux/MacOS:
```bash
python -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Install Ethereum development dependencies:
```bash
npm install -g truffle
npm install @openzeppelin/contracts
```

## Project Structure

```
zkp_blockchain_iam/
├── contracts/
│   └── IdentityContract.sol      # Ethereum smart contract
├── core/
│   ├── __init__.py
│   ├── zkp.py                    # ZKP implementation
│   ├── blockchain.py             # Blockchain interactions
│   └── identity.py               # Identity management
├── api/
│   ├── __init__.py
│   └── routes.py                 # API endpoints
├── tests/
│   ├── __init__.py
│   ├── test_zkp.py
│   ├── test_blockchain.py
│   └── test_identity.py
├── config/
│   └── config.yaml               # Configuration file
├── main.py                       # Application entry point
├── requirements.txt              # Python dependencies
├── truffle-config.js             # Truffle configuration
└── README.md                     # This file
```

## Configuration

1. Create a `config.yaml` file in the config directory:
```yaml
blockchain:
  node_url: "http://localhost:8545"
  contract_address: "0x..."  # Your deployed contract address
  gas_limit: 2000000
  
api:
  host: "0.0.0.0"
  port: 8000
  debug: false

security:
  min_password_length: 12
  max_failed_attempts: 3
  lockout_duration: 300  # seconds
```

2. Set environment variables:
```bash
export ETHEREUM_PRIVATE_KEY="your-private-key"
export SECRET_KEY="your-secret-key"
```

## Usage

1. Start the API server:
```bash
python main.py
```

2. Create a new identity:
```bash
curl -X POST http://localhost:8000/identity/create \
  -H "Content-Type: application/json" \
  -d '{"address": "0x...", "secret": "user-secret"}'
```

3. Verify an identity:
```bash
curl -X POST http://localhost:8000/identity/verify \
  -H "Content-Type: application/json" \
  -d '{"address": "0x...", "secret": "user-secret", "blinding_factor": "..."}'
```

## API Documentation

### Endpoints

#### POST /identity/create
Create a new identity with ZKP commitment.

Request:
```json
{
  "address": "string",
  "secret": "string"
}
```

Response:
```json
{
  "status": "success",
  "address": "string"
}
```

#### POST /identity/verify
Verify an identity using ZKP.

Request:
```json
{
  "address": "string",
  "secret": "string",
  "blinding_factor": "string"
}
```

Response:
```json
{
  "status": "success",
  "valid": boolean
}
```

## Smart Contract Deployment

1. Configure Truffle:
```javascript
// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
```

2. Deploy the contract:
```bash
truffle migrate --network development
```

## Testing

Run the test suite:
```bash
python -m pytest tests/
```

Run specific tests:
```bash
python -m pytest tests/test_zkp.py
```

## Security Considerations

- Always use secure communication channels (HTTPS)
- Regularly update dependencies
- Monitor smart contract events
- Implement rate limiting
- Use secure key storage
- Regular security audits
- Implement proper access controls

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details