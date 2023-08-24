var pacificAtlantic = function (heights) {
  let result = [];
  let row = heights.length;
  let col = heights[0].length;
  let newHeight = [];
  let dp = [];

  dp.push([
    [true, true, true, true],
    ...new Array(col).fill([true, true, false, true]),
    [true, true, true, true],
  ]);
  heights.forEach(() => {
    dp.push([
      [true, false, true, true],
      ...new Array(col).fill([...new Array(4).fill(false)]),
      [true, true, true, false],
    ]);
  });
  dp.push([
    [true, true, true, true],
    ...new Array(col).fill([true, true, false, true]),
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
      //   dp[i][j][0] = newHeight[i][j] >= newHeight[i - 1][j] && dp[i - 1][j][0];
      //   dp[i][j][1] = newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1];
      //   dp[i][j][2] = newHeight[i][j] >= newHeight[i + 1][j] && dp[i + 1][j][2];
      dp[i][j][3] = newHeight[i][j] >= newHeight[i][j - 1] && dp[i][j - 1][3];
      //   console.log(i, j, dp[i][j]);
    }
  }
  for (let j = 1; j <= col; j++) {
    for (let i = 1; i <= row; i++) {
      dp[i][j][0] = newHeight[i][j] >= newHeight[i - 1][j] && dp[i - 1][j][0];
      //   dp[i][j][1] = newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1];
      //   dp[i][j][2] = newHeight[i][j] >= newHeight[i + 1][j] && dp[i + 1][j][2];
      //   dp[i][j][3] = newHeight[i][j] >= newHeight[i][j - 1] && dp[i][j - 1][3];
      //   console.log(i, j, dp[i][j]);
    }
  }
  for (let i = 1; i <= row; i++) {
    for (let j = col; j >= 1; j--) {
      //   dp[i][j][0] = newHeight[i][j] >= newHeight[i - 1][j] && dp[i - 1][j][0];
      if (i == 1 && j == 4) {
        console.log(
          i,
          j,
          dp[1][5][1]
          // newHeight[1][5],
          // newHeight[1][5 + 1],
          // dp[1][5 + 1][1],
          // newHeight[1][5] >= newHeight[1][5 + 1] && dp[1][5 + 1][1]
        );
        console.log(
          dp[i][j][1],
          newHeight[i][j],
          newHeight[i][j + 1],
          dp[i][j + 1][1],
          newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1]
        );
      }
      console.log(
        i,
        j,
        dp[1][4][1],
        dp[1][5][1]
        // newHeight[1][5],
        // newHeight[1][5 + 1],
        // dp[1][5 + 1][1],
        // newHeight[1][5] >= newHeight[1][5 + 1] && dp[1][5 + 1][1]
      );
      //   if (i != 1 || j != 4) {
      dp[i][j][1] = newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1];
      //   }
      console.log(
        i,
        j,
        dp[1][4][1],
        dp[1][5][1]
        // newHeight[1][5],
        // newHeight[1][5 + 1],
        // dp[1][5 + 1][1],
        // newHeight[1][5] >= newHeight[1][5 + 1] && dp[1][5 + 1][1]
      );

      if (i == 1 && j == 4) {
        console.log(
          dp[i][j][1],
          newHeight[i][j],
          newHeight[i][j + 1],
          dp[i][j + 1][1],
          newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1]
        );
        //   dp[i][j][2] = newHeight[i][j] >= newHeight[i + 1][j] && dp[i + 1][j][2];
        //   dp[i][j][3] = newHeight[i][j] >= newHeight[i][j - 1] && dp[i][j - 1][3];
        //   console.log(i, j, dp[i][j]);
        console.log(
          i,
          j,
          dp[1][5][1]
          // newHeight[1][5],
          // newHeight[1][5 + 1],
          // dp[1][5 + 1][1],
          // newHeight[1][5] >= newHeight[1][5 + 1] && dp[1][5 + 1][1]
        );
      }
    }
  }
  //   console.log(
  //     dp[1][5][1],
  //     newHeight[1][5],
  //     newHeight[1][5 + 1],
  //     dp[1][5 + 1][1],
  //     newHeight[1][5] >= newHeight[1][5 + 1] && dp[1][5 + 1][1]
  //   );
  for (let j = 1; j <= col; j++) {
    for (let i = row; i >= 1; i--) {
      //   dp[i][j][0] = newHeight[i][j] >= newHeight[i - 1][j] && dp[i - 1][j][0];
      //   dp[i][j][1] = newHeight[i][j] >= newHeight[i][j + 1] && dp[i][j + 1][1];
      dp[i][j][2] = newHeight[i][j] >= newHeight[i + 1][j] && dp[i + 1][j][2];
      //   dp[i][j][3] = newHeight[i][j] >= newHeight[i][j - 1] && dp[i][j - 1][3];
      //   console.log(i, j, dp[i][j]);
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
// pacificAtlantic([
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4],
// ]);

function wsd(nums, arr) {
  let newarr = arr
    .split(" ")
    .map((el) => parseInt(el))
    .sort();
  let half = Math.floor(parseInt(nums) / 2);
  let sum1 = 0;
  newarr.slice(0, half).forEach((el) => {
    sum1 += el - 5;
  });
  let sum2 = 0;
  newarr.slice(half).forEach((el) => {
    sum2 += el / 2;
  });
  console.log(parseFloat(sum1 + sum2).toFixed(1));
}
// wsd("3", "10 15 25");

function leastCost(nums, arr) {
  let dp = new Array(nums).fill(0);
  dp[0] = arr[0] / 2;
  dp[1] = Math.min(dp[0] + arr[1] - 5, arr[0] - 5 + arr[1] / 2);
  for (let i = 2; i < nums; i++) {
    dp[i] = Math.min(
      dp[i - 2] + arr[i - 1] - 5 + arr[i] / 2,
      dp[i - 1] + arr[i] - 5
    );
  }
  console.log(dp[nums - 1]);
}
// leastCost(4, [178, 15, 25, 178]);

function restructString(str) {
  let newStr = str.split("");
  let mySet = new Set(newStr);
  let letter = [...mySet];
  let t = "";
  newStr.forEach((el) => {
    t += letter[(letter.indexOf(el) + 1) % letter.length];
  });
  console.log(t);
}
restructString("aabbc");
