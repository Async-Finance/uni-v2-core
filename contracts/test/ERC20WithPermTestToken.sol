import "../libraries/token/ERC20.sol";

contract ERC20TestToken is ERC20 {
    uint256 private _totalSupply;

    constructor(string memory name, string memory symbol, uint256 totalSupply) ERC20(name, symbol) {
        _totalSupply = totalSupply;
    }

    function mint(uint value) external {
        _mint(msg.sender, value);
    }

    function getChainId() external view returns (uint256) {
        return block.chainid;
    }
}