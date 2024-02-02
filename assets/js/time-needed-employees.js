function numOfMinutes(n, headID, manager, informTime) {
    const graph = new Map();

    // Populate the adjacency list
    for (let i = 0; i < n; i++) {
        if (!graph.has(manager[i])) {
            graph.set(manager[i], []);
        }
        graph.get(manager[i]).push(i);
    }

    // Helper function to perform DFS
    function dfs(node) {
        if (!graph.has(node)) {
            return 0;
        }

        let maxTime = 0;
        for (const subordinate of graph.get(node)) {
            maxTime = Math.max(maxTime, dfs(subordinate));
        }

        return maxTime + informTime[node];
    }

    // Start DFS from the head of the company
    return dfs(headID);
}


const n = 1;
const headID = 0;
const manager = [-1];
const informTime = [0];

const result = numOfMinutes(n, headID, manager, informTime);
console.log(result); 