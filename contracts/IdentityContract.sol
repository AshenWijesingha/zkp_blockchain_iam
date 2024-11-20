// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityContract {
    struct Identity {
        bytes32 commitmentHash;
        uint256 createdAt;
        bool active;
        mapping(string => bytes32) claims;
    }
    
    mapping(address => Identity) public identities;
    
    event IdentityCreated(address indexed user, bytes32 commitmentHash);
    event ClaimAdded(address indexed user, string claimType, bytes32 claimHash);
    
    function createIdentity(bytes32 _commitmentHash) public {
        require(identities[msg.sender].createdAt == 0, "Identity already exists");
        
        Identity storage newIdentity = identities[msg.sender];
        newIdentity.commitmentHash = _commitmentHash;
        newIdentity.createdAt = block.timestamp;
        newIdentity.active = true;
        
        emit IdentityCreated(msg.sender, _commitmentHash);
    }
    
    function addClaim(string memory _claimType, bytes32 _claimHash) public {
        require(identities[msg.sender].active, "Identity not found or inactive");
        
        identities[msg.sender].claims[_claimType] = _claimHash;
        emit ClaimAdded(msg.sender, _claimType, _claimHash);
    }
    
    function verifyClaim(address _user, string memory _claimType, bytes32 _claimHash) 
        public view returns (bool) {
        return identities[_user].claims[_claimType] == _claimHash;
    }
}