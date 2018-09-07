// const packetAllocate = (total, num, min) => {
//   for (let i = 0; i < num; i++) {
//     let safe = (total - (num - i) * min) / (num - i).toFixed(2);
//     let tmp = ((Math.random() * 100 * (safe - min) + min * 100) / 100).toFixed(
//       2
//     );
//     total = (total - tmp).toFixed(2);

//     console.log(`第${i}个，${tmp}元，剩下${total}`);
//   }
//   console.log(`第${num}个，${total}元，剩下${0}`);
// };
                                                                                                                                                                                                            
// packetAllocate(10, 8, 0.5);

// function packet(amount, n, min) {
//   let weights = [];
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     let weight = Math.random();
//     weights.push(weight);
//     total += weight;
//   }

//   let balance = amount;
//   let count = n;
//   let takes = [];
//   while (count > 0) {
//     let weight = weights[n - count];
//     let take = Math.ceil((weight / total) * amount);
//     take = Math.max(min, Math.min(take, balance - (count - 1)));

//     takes.push(take);
//     balance -= take;
//     count--;
//   }
//   takes = takes.map(x => x / 100);
//   return takes;
// }

// console.log(packet(1000, 8, 30));

const packetAlo = (total, num, min) => {
  let data = [];
  let money = [];

  for (let i = 0; i < num; i++) {
    data[i] = +(Math.random() * total + min).toFixed(2);
  }
  console.log("data:" + data);

  let sum = 0;
  data.map(d => (sum += d));
  sum = +sum.toFixed(2);
  console.log(sum);
  for (let j = 0; j < data.length - 1; j++) {
    money[j] = +((data[j] / sum) * total).toFixed(2);
  }
  let moneySum = 0;
  money.map(x => (moneySum += x));
  moneySum = +moneySum.toFixed(2);
  money[data.length - 1] = +(total - moneySum).toFixed(2);
  console.log(money);
};

packetAlo(100, 8, 5);
