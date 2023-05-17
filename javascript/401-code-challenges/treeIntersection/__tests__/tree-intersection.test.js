const {treeIntersection} = require('../tree-intersection');
const { BinaryTree, Node } = require('../../trees/binaryTree');

let myTreeA = new BinaryTree(30);
myTreeA.root.left = new Node(9)
myTreeA.root.left.left = new Node(15)
myTreeA.root.left.right = new Node(20)
myTreeA.root.right = new Node(5)
myTreeA.root.right.left = new Node(7)

let myTreeB = new BinaryTree(30);
myTreeB.root.left = new Node(19)
myTreeB.root.left.left = new Node(43)
myTreeB.root.left.right = new Node(20)
myTreeB.root.right = new Node(5)
myTreeB.root.right.left = new Node(17)


let myTreeC = new BinaryTree(150);
myTreeC.root.left = new Node(100)
myTreeC.root.left.left = new Node(75)
myTreeC.root.left.right = new Node(160)
myTreeC.root.left.right.left = new Node(125)
myTreeC.root.left.right.right = new Node(175)

myTreeC.root.right = new Node(250)
myTreeC.root.right.left = new Node(200)
myTreeC.root.right.right = new Node(350)
myTreeC.root.right.right.left = new Node(300)
myTreeC.root.right.right.right = new Node(500)

let myTreeD = new BinaryTree(42);
myTreeD.root.left = new Node(100)
myTreeD.root.left.left = new Node(15)
myTreeD.root.left.right = new Node(160)
myTreeD.root.left.right.left = new Node(125)
myTreeD.root.left.right.right = new Node(175)

myTreeD.root.right = new Node(600)
myTreeD.root.right.left = new Node(200)
myTreeD.root.right.right = new Node(350)
myTreeD.root.right.right.left = new Node(4)
myTreeD.root.right.right.right = new Node(500)

let myTreeE = new BinaryTree(999);
myTreeE.root.left = new Node(888)
myTreeE.root.left.left = new Node(777)
myTreeE.root.left.right = new Node(666)
myTreeE.root.left.right.left = new Node(555)
myTreeE.root.left.right.right = new Node(444)

myTreeE.root.right = new Node(333)
myTreeE.root.right.left = new Node(222)
myTreeE.root.right.right = new Node(111)
myTreeE.root.right.right.left = new Node(998)
myTreeE.root.right.right.right = new Node(887)

let myTreeF = new BinaryTree(999);
myTreeF.root.left = new Node(886)
myTreeF.root.left.left = new Node(777)
myTreeF.root.left.right = new Node(665)
myTreeF.root.left.right.left = new Node(556)
myTreeF.root.left.right.right = new Node(444)

myTreeF.root.right = new Node(332)
myTreeF.root.right.left = new Node(222)
myTreeF.root.right.right = new Node(112)
myTreeF.root.right.right.left = new Node(998)
myTreeF.root.right.right.right = new Node(881)




describe('Testing treeIntersection function...', () => {

  test('Should return an array of 30, 5, and 20', () => {
    let results = treeIntersection(myTreeA, myTreeB);
    console.log('RESULTS 1: ', results)
    expect(results).toStrictEqual([30, 5, 20])
  })

  test('Should return an array of 175, 100, 160, 350, 200, 500, 125', () => {
    let results = treeIntersection(myTreeC, myTreeD);
    console.log('RESULTS 2: ', results)
    expect(results).toStrictEqual([175, 100, 160, 350, 200, 500, 125])
  })

  test('Should return an array of 30, 5, and 20', () => {
    let results = treeIntersection(myTreeE, myTreeF);
    console.log('RESULTS 3: ', results)
    expect(results).toStrictEqual([998, 999, 777, 222, 444])
  })

})