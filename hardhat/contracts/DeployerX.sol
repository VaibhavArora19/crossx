// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {AxelarExecutable} from "./AxelarExecutable.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

contract DeployerX is AxelarExecutable {
    // This function is used to deploy the contract across multiple chains
    // @param target - the address of the target contract
    // @param destinationDomain - a array of the destination chain IDs
    // @param salt - the salt used to create the contract address
    // @param bytecode - the bytecode of the contract
    // @param initializable - a boolean to determine if the contract is initializable
    // @param initializeData - the data used to initialize the contract
    function xDeployer(
        string calldata destinationAddress,
        string[] calldata destinationDomain,
        bytes32 salt,
        bytes memory bytecode,
        uint256[] calldata relayerFee,
        bool initializable,
        bytes memory initializeData,
        uint256 totalFee
    ) external payable {
        require(msg.value >= totalFee, "msg.value must equal totalFee");
        if (destinationDomain.length != relayerFee.length) {
            revert("destinationDomain and relayerFee must be the same length");
        }
        // deploy contract on present chain
        deployContract(salt, bytecode, initializable, initializeData);
        // encoding the data to pass to GMP
        bytes memory payload = abi.encode(
            salt,
            bytecode,
            initializable,
            initializeData
        );
        // sending deploy msg to other chains
        for (uint i = 0; i < destinationDomain.length; ) {
            if (msg.value > 0) {
                gasService.payNativeGasForContractCall{value: relayerFee[i]}(
                    address(this),
                    destinationDomain[i],
                    destinationAddress,
                    payload,
                    msg.sender
                );
            }

            gateway.callContract(
                destinationDomain[i],
                destinationAddress,
                payload
            );
            unchecked {
                ++i;
            }
        }
    }

    function _execute(
        string calldata,
        string calldata,
        bytes calldata payload_
    ) internal override {
        (
            bytes32 salt,
            bytes memory bytecode,
            bool initializable,
            bytes memory initializeData
        ) = abi.decode(payload_, (bytes32, bytes, bool, bytes));
        deployContract(salt, bytecode, initializable, initializeData);
    }

    // This function is used to deploy and initialize a contract
    // @param salt - the salt used to generate the address
    // @param bytecode - the bytecode of the contract
    // @param initializable - whether the contract is initializable
    // @param initializeData - the data used to initialize the contract
    // @return address - the address of the deployed contract
    function deployContract(
        bytes32 salt,
        bytes memory bytecode,
        bool initializable,
        bytes memory initializeData
    ) public returns (address) {
        address deployedAddress = deploy(salt, bytecode);
        // transfer ownership to the _originSender
        if (initializable) {
            (bool success, ) = deployedAddress.call(initializeData);
            require(success, "initiailse failed");
        }
        return deployedAddress;
    }

    // This function is used to deploy a contract using CREATE2
    // @param salt - the salt used to generate the address
    // @param bytecode - the bytecode of the contract
    // @return address - the address of the deployed contract
    function deploy(
        bytes32 salt,
        bytes memory bytecode
    ) public returns (address) {
        return Create2.deploy(0, salt, bytecode);
    }

    // This function is used to compute the address of the contract that will be deployed
    // @param salt - the salt used to generate the address
    // @param bytecode - the bytecode of the contract
    // @return address - the computed address of the contract that will be deployed
    function computeAddress(
        bytes32 salt,
        bytes memory bytecode
    ) public view returns (address) {
        return Create2.computeAddress(salt, keccak256(bytecode));
    }

    receive() external payable {}
}
