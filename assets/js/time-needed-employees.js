function calculateMinutes() {
    const n = parseInt(document.getElementById('numberOfEmployees').value, 10);
    const headID = parseInt(document.getElementById('headID').value, 10);
    const managerInput = document.getElementById('manager').value.split(',').map(Number);
    const informTimeInput = document.getElementById('informTime').value.split(',').map(Number);

    const minutes = informAllEmployees(n, headID, managerInput, informTimeInput);

    document.getElementById('output').innerText = `Minutes needed to inform all employees: ${minutes}`;
}

function informAllEmployees(n, headID, manager, informTime) {
    const adjList = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        if (manager[i] !== -1) {
            adjList[manager[i]].push(i);
        }
    }

    return inform(headID, adjList, informTime);
}

function inform(employee, adjList, informTime) {
    if (adjList[employee].length === 0) {
        return 0;
    }

    let maxSubordinateTime = 0;
    for (const subordinate of adjList[employee]) {
        maxSubordinateTime = Math.max(maxSubordinateTime, inform(subordinate, adjList, informTime));
    }

    return maxSubordinateTime + informTime[employee];
}