// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Escrow {
	address public arbiter;
	address public beneficiary;
	address public depositor;

	bool public isApproved;
    event hasDeployed(address indexed deployer, address indexed contractAddress);

	constructor(address _arbiter, address _beneficiary) payable {
		arbiter = _arbiter;
		beneficiary = _beneficiary;
		depositor = msg.sender;
        emit hasDeployed(msg.sender, address(this));
	}

	event Approved(uint);

	function approve() external {
		require(msg.sender == arbiter);
		uint balance = address(this).balance;
		(bool sent, ) = payable(beneficiary).call{value: balance}("");
 		require(sent, "Failed to send Ether");
		emit Approved(balance);
		isApproved = true;
	}
}
