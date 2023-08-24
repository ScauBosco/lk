/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let result = [];
  let row = heights.length;
  let col = heights[0].length;
  let newHeight = [];
  let dp = [];

  dp.push([
    [true, true, true, true],
    ...new Array(col).fill().map(() => new Array(true, true, false, true)),
    // ...new Array(col).fill([true, true, false, true]),
    [true, true, true, true],
  ]);
  heights.forEach(() => {
    dp.push([
      [true, false, true, true],
      ...new Array(col).fill().map(() => new Array(false, false, false, false)),
      //   ...new Array(col).fill([false,false,false,false]),
      [true, true, true, false],
    ]);
  });
  dp.push([
    [true, true, true, true],
    ...new Array(col).fill().map(() => new Array(false, true, true, true)),
    // ...new Array(col).fill([true, true, false, true]),
    [true, true, true, true],
  ]);

  newHeight.push(new Array(col + 2).fill(0));

  heights.forEach((el) => {
    newHeight.push([0, ...el, 0]);
  });
  newHeight.push(new Array(col + 2).fill(0));

  //   console.log(newHeight);
  //   console.log(dp);
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      dp[i][j][3] = newHeight[i][j] >= newHeight[i][j - 1] && dp[i][j - 1][3];
    }
  }
  for (let j = 1; j <= col; j++) {
    for (let i = 1; i <= row; i++) {
      dp[i][j][0] = newHeight[i][j] >= newHeight[i - 1][j] && dp[i - 1][j][0];
    }
  }
  for (let i = 1; i <= row; i++) {
    for (let j = col; j >= 1; j--) {
      dp[i][j][1] = newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1];
    }
  }
  for (let j = 1; j <= col; j++) {
    for (let i = row; i >= 1; i--) {
      if (i == 5 && j == 1) {
        console.log(
          dp[i][j],
          newHeight[i][j],
          newHeight[i + 1][j],
          newHeight[i][j] >= newHeight[i + 1][j],
          dp[i + 1][j][2]
        );
      }
      dp[i][j][2] = newHeight[i][j] >= newHeight[i + 1][j] && dp[i + 1][j][2];
      if (i == 5 && j == 1) {
        console.log(
          dp[i][j],
          newHeight[i][j],
          newHeight[i + 1][j],
          newHeight[i][j] >= newHeight[i + 1][j],
          dp[i + 1][j][2]
        );
      }
    }
  }

  console.log(dp);
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if ((dp[i][j][0] || dp[i][j][3]) && (dp[i][j][1] || dp[i][j][2]))
        result.push([i - 1, j - 1]);
    }
  }
  console.log(result);
  return result;
};
// @lc code=end
