from web3 import Web3
from eth_account import Account
import json


class BlockchainModule:
    def __init__(self, node_url: str, contract_address: str):
        self.w3 = Web3(Web3.HTTPProvider(node_url))

        # Load contract ABI (abbreviated for example)
        self.contract_abi = [
            {
                "inputs": [
                    {"type": "bytes32", "name": "_commitmentHash"}
                ],
                "name": "createIdentity",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]

        self.contract = self.w3.eth.contract(
            address=contract_address,
            abi=self.contract_abi
        )

    def create_identity(self, commitment_hash: bytes, private_key: str):
        account = Account.from_key(private_key)

        transaction = self.contract.functions.createIdentity(
            commitment_hash
        ).build_transaction({
            'from': account.address,
            'nonce': self.w3.eth.get_transaction_count(account.address),
            'gas': 2000000,
            'gasPrice': self.w3.eth.gas_price
        })

        signed_txn = self.w3.eth.account.sign_transaction(
            transaction, private_key
        )
        tx_hash = self.w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        return self.w3.eth.wait_for_transaction_receipt(tx_hash)
