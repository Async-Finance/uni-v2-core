import "../libraries/token/ERC20WithPermit.sol";

contract ERC20WithPermTestToken is ERC20WithPermit {
    uint256 private _totalSupply;

    constructor(string memory name, string memory symbol, uint256 totalSupply) ERC20WithPermit(name, symbol) {
        _totalSupply = totalSupply;
    }

    function mint(uint value) external {
        _mint(msg.sender, value);
    }

    function getChainId() external view returns (uint256) {
        return block.chainid;
    }
}