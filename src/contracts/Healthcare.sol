// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Healthcare {

    address public owner;
    string public name;

    // Constructor that takes two parameters
    constructor(address _owner, string memory _name) {
        owner = _owner;
        name = _name;
    }

    // Add more functionality as needed...
}

