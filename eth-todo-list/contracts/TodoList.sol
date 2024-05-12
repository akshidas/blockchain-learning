pragma solidity ^0.5.0;

contract TodoList {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    constructor() public {
        addTask("This is the first Task");
    }

    mapping(uint => Task) public tasks;

    function addTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}
