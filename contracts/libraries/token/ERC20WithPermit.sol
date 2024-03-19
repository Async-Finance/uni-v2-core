// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.0;

import "./ERC20Permit.sol";


abstract contract ERC20WithPermit is ERC20Permit {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) ERC20Permit(name) {}
}