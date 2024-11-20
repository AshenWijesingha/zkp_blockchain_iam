import uvicorn
from api.routes import app
from core.zkp import ZKPModule
from core.blockchain import BlockchainModule
from core.identity import IdentityManager


def init_application():
    # Initialize components
    zkp_module = ZKPModule()
    blockchain_module = BlockchainModule(
        node_url="http://localhost:8545",
        contract_address="0x..."  # Your deployed contract address
    )

    global identity_manager
    identity_manager = IdentityManager(zkp_module, blockchain_module)

    return app


if __name__ == "__main__":
    app = init_application()
    uvicorn.run(app, host="0.0.0.0", port=8000)
