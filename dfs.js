let tree = [
  {
    name: "asd1",
    children: [
      { name: "asd2", children: [{ name: "asd3" }] },
      {
        name: "asd4",
        children: [
          { name: "asd5" },
          { name: "asd6", children: [{ name: "asd4" }] },
        ],
      },
    ],
  },
];
function findChildNodes(treeNode) {
  let ans = 0;
  function dfs(node) {
    for (let i = 0; i < node.length; i++) {
      if (node[i].children) {
        dfs(node[i].children);
      } else {
        ans++;
      }
    }
  }
  dfs(treeNode);
  console.log(ans);
}
findChildNodes(tree);
