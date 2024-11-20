from dataclasses import dataclass
from datetime import datetime
from typing import Dict, Optional


@dataclass
class Identity:
    address: str
    commitment_hash: bytes
    claims: Dict[str, bytes]
    created_at: datetime
    active: bool


class IdentityManager:
    def __init__(self, zkp_module, blockchain_module):
        self.zkp = zkp_module
        self.blockchain = blockchain_module
        self.identities = {}

    async def create_identity(self, address: str, secret: bytes) -> Identity:
        commitment_hash, r = self.zkp.create_commitment(secret)

        # Store on blockchain
        tx_receipt = self.blockchain.create_identity(commitment_hash, address)

        # Create local identity record
        identity = Identity(
            address=address,
            commitment_hash=commitment_hash,
            claims={},
            created_at=datetime.now(),
            active=True
        )

        self.identities[address] = identity
        return identity

    async def verify_identity(self, address: str, secret: bytes, r: bytes) -> bool:
        identity = self.identities.get(address)
        if not identity:
            return False

        return self.zkp.verify_commitment(identity.commitment_hash, secret, r)
