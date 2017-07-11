'use strict';

function calculateCount(inputs) {
  var CountArray = [];
  var Count = {};
  for (var i = 0; i < inputs.length;) {
    var count = 0;
    for (var j = 0; j < inputs.length; j++) {
      if (inputs[i]== inputs[j]) {
        count++;
      }
    }
    Count = {
      barcode: inputs[i],
      count: count
    }
    CountArray.push(Count);
    i += count;
  }
  //console.log(CountArray);
  return CountArray;
}
function makeReceipt(CountArray) {
  var Receipt = loadAllItems();
  var ReceiptSum=[];
  for (var i = 0; i < Receipt.length; i++) {
    for (var j = 0; j < CountArray.length; j++) {
      if (CountArray[j].barcode == Receipt[i].barcode) {
        ReceiptSum.push({
          barcode: Receipt[i].barcode,
          name: Receipt[i].name,
          unit: Receipt[i].unit,
          price: Receipt[i].price,
          count: CountArray[j].count,
          sum: CountArray[j].count * Receipt[i].price
        })
      }
    }
  }
  return ReceiptSum;
}


function buildSingleItem(ReceiptSum) {
  return `名称：${ReceiptSum.name}，数量：${ReceiptSum.count}${ReceiptSum.unit}，单价：${ReceiptSum.price.toFixed(2)}(元)，小计：${ReceiptSum.sum.toFixed(2)}(元)`
}
function printReceipt(inputs) {
  var CountArray=calculateCount(inputs);
  var ReceiptSum = makeReceipt(CountArray);
  var s = "";
  var total = 0;
  for (let i = 0; i < ReceiptSum.length; i++) {
    /* s+="名称："+Receipt[i].name+"，"+"数量："+Receipt[i].count+Receipt[i].unit+"，" +
     "单价："+Receipt[i].price+"(元)，"+"小计："+Receipt[i].sum+"(元)"+"\n";
     total+=Receipt[i].sum;
     }
     s+="----------------------\n"+"总计："+total+"(元)\n"+"**********************";*/
    if (i != ReceiptSum.length - 1) {
      s += buildSingleItem(ReceiptSum[i]) + '\n';
    } else {
      s += buildSingleItem(ReceiptSum[i]);
    }
    total += ReceiptSum[i].sum;
  }
  console.log(`***<没钱赚商店>收据***
${s}
----------------------
总计：${total.toFixed(2)}(元)
**********************`);
}

/*const inputs = [
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
];
printReceipt(inputs);

const expectText = `***<没钱赚商店>收据***
名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)
名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)
名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)
----------------------
总计：23.00(元)
**********************`;
function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: '苹果',
      unit: '斤',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: '荔枝',
      unit: '斤',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: '电池',
      unit: '个',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: '方便面',
      unit: '袋',
      price: 4.50
    }
  ];
}*/
