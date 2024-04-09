// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Project {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 collected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Project) public projects;

    uint256 public numberOfProjects = 0;

    function create(
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Project storage project = projects[numberOfProjects];

        require(
            project.deadline < block.timestamp,
            "The deadline should be a date in the future."
        );

        project.owner = msg.sender;
        project.title = _title;
        project.description = _description;
        project.target = _target;
        project.deadline = _deadline;
        project.collected = 0;
        project.image = _image;

        numberOfProjects++;

        return numberOfProjects - 1;
    }

    function donate(uint256 _id) public payable {
        uint256 amount = msg.value;

        Project storage project = projects[_id];

        project.donators.push(msg.sender);
        project.donations.push(amount);

        (bool sent, ) = payable(project.owner).call{value: amount}("");

        if (sent) {
            project.collected = project.collected + amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (projects[_id].donators, projects[_id].donations);
    }

    function getProjects() public view returns (Project[] memory) {
        Project[] memory allProjects = new Project[](numberOfProjects);

        for (uint i = 0; i < numberOfProjects; i++) {
            Project storage item = projects[i];

            allProjects[i] = item;
        }

        return allProjects;
    }
}
