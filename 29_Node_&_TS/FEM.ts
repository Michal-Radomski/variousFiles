export {};

//* FEM (Finite element method)
class Node {
  constructor(public id: number, public x: number) {}
}

class Element {
  constructor(public id: number, public node1: Node, public node2: Node, public stiffness: number) {}
}

class Mesh {
  nodes: Node[] = [];
  elements: Element[] = [];
  globalStiffnessMatrix: number[][] = [];
  globalForceVector: number[] = [];

  addNode(node: Node) {
    this.nodes.push(node);
  }

  addElement(element: Element) {
    this.elements.push(element);
  }

  assembleGlobalStiffnessMatrix() {
    const size = this.nodes.length;
    this.globalStiffnessMatrix = Array.from({ length: size }, () => Array(size).fill(0));

    for (const element of this.elements) {
      const { node1, node2, stiffness } = element;
      const k = stiffness;
      const i = node1.id;
      const j = node2.id;

      this.globalStiffnessMatrix[i][i] += k;
      this.globalStiffnessMatrix[i][j] -= k;
      this.globalStiffnessMatrix[j][i] -= k;
      this.globalStiffnessMatrix[j][j] += k;
    }
  }

  applyBoundaryConditions(boundaryConditions: { node: number; value: number }[]) {
    for (const bc of boundaryConditions) {
      const { node, value } = bc;
      this.globalForceVector[node] = value;
      for (let i = 0; i < this.globalStiffnessMatrix.length; i++) {
        this.globalStiffnessMatrix[node][i] = 0;
        this.globalStiffnessMatrix[i][node] = 0;
      }
      this.globalStiffnessMatrix[node][node] = 1;
    }
  }

  solve() {
    const size = this.globalStiffnessMatrix.length;
    const displacements = new Array(size).fill(0);

    // Simple Gaussian elimination for solving linear equations
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        const factor = this.globalStiffnessMatrix[j][i] / this.globalStiffnessMatrix[i][i];
        for (let k = i; k < size; k++) {
          this.globalStiffnessMatrix[j][k] -= factor * this.globalStiffnessMatrix[i][k];
        }
        this.globalForceVector[j] -= factor * this.globalForceVector[i];
      }
    }

    for (let i = size - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < size; j++) {
        sum += this.globalStiffnessMatrix[i][j] * displacements[j];
      }
      displacements[i] = (this.globalForceVector[i] - sum) / this.globalStiffnessMatrix[i][i];
    }

    return displacements;
  }
}

const mesh = new Mesh();

// Create nodes
mesh.addNode(new Node(0, 0));
mesh.addNode(new Node(1, 1));
mesh.addNode(new Node(2, 2));

// Create elements
mesh.addElement(new Element(0, mesh.nodes[0], mesh.nodes[1], 100));
mesh.addElement(new Element(1, mesh.nodes[1], mesh.nodes[2], 100));

// Assemble global stiffness matrix
mesh.assembleGlobalStiffnessMatrix();

// Apply boundary conditions (fixed at node 0, force applied at node 2)
mesh.globalForceVector = [0, 0, 10];
mesh.applyBoundaryConditions([{ node: 0, value: 0 }]);

// Solve for displacements
console.log("mesh:", mesh);

const displacements = mesh.solve();
console.log("Displacements:", displacements);
